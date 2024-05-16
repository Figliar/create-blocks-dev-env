/**
 * Author: René Rešetár
 * Email: xreset00@stud.fit.vutbr.cz
 *
 * This file contains a main controlling function createBlocks
 * Here we initialize Blockly Workspace and Parser, register needed classes to Distributor
 * and control the application.
 */

/**
 * Initialization of buttons used in application
 **/
const regenerate = document.getElementById("blocks-to-code");
const generate = document.getElementById("code-to-blocks");
const test = document.getElementById("test");
const API = document.getElementById("API");
const inputElement = document.getElementById("textInput");

/**
 * Register all subclasses automatically
 * Called in the beginning of the block creation process
 * @param {Distributor} distributor Object responsible for calling/creating correct Object to deal with node.
 */
function registerAllSubclasses(distributor) {
    ShebangNode.register(distributor);
    VariableAssignmentNode.register(distributor);
    LocalVariableNode.register(distributor);
    CommentNode.register(distributor);
    BreakNode.register(distributor);
    EmptyLineNode.register(distributor);
    IdentifierNode.register(distributor);
    IfElseIfElseNode.register(distributor);
    ForNumericNode.register(distributor);
    ForGenericNode.register(distributor);
    WhileNode.register(distributor);
    FunctionCallNode.register(distributor);
    FunctionDefinitionNode.register(distributor);
    ReturnNode.register(distributor);
    NumberNode.register(distributor);
    VariableNode.register(distributor);
    UnaryExpressionNode.register(distributor);
    StringNode.register(distributor);
    BooleanNode.register(distributor);
    NilNode.register(distributor);
    TableNode.register(distributor);
    BinaryExpressionNode.register(distributor);
    ParenthesizedExpressionNode.register(distributor);
    RepeatNode.register(distributor);
    // Repeat for other subclasses...
}

/**
 * Initialize Blockly Workspace and assign it to the div in HTML file
 */
let newWorkspace = Blockly.inject('blocklyDiv', {
    // media: 'https://unpkg.com/blockly/media/',
    toolbox: toolboxOptions
});

/**
 * Function to create Blockly blocks based on the provided code (and workspace).
 *
 * This function initializes the Blockly workspace and sets up event listeners for generating code from blocks,
 * initializing the parser environment, testing, and utilizing the API for parsing code with Tree-Sitter.
 *
 * @param {Blockly.WorkspaceSvg} workspace - The Blockly workspace to work with.
 */
function createBlocks(workspace) {
    /**
     * Implementation of button "Blocks to Code" which generates code from blocks present in Blockly Workspace
     * for developing purposes it is advised to switch code generating to console output
     **/
    regenerate.addEventListener('click', function(){
        const generatedCode = lua.luaGenerator.workspaceToCode(workspace);
        console.log(generatedCode);
        // document.getElementById("textInput").value = generatedCode;
    });

    /**
     * Initialization of parser and environment in which the parser is available
     **/
    const Parser = window.TreeSitter;
    Parser.init().then(async () => {
        const parser = new Parser;
        const LUA = await Parser.Language.load('scripts/tree-sitter-lua-final.wasm');
        parser.setLanguage(LUA);

        // DISTRIBUTOR INIT
        let distributor = new Distributor(); // Create a distributor
        registerAllSubclasses(distributor); // Register all subclasses

        /**
         * Implementation of "Code to Blocks" button which initializes the main functionality of this application
         **/
        generate.addEventListener('click', function(event) {
            // PARSE INPUT
            const tree = parser.parse(inputElement.value);

            // CHECK FOR ERRORS IN INPUT
            const variableNames = findErrors(tree);

            // tree.rootNode.children.forEach((node) => {
            //     console.log(node);
            // });

            // IF TREE HAS CHILDREN (THERE IS SOMETHING TO CREATE)
            if(tree.rootNode.children) {
                // SAVE BLOCKLY WORKSPACE STATE AND PREPARE CLEAN WORKSPACE
                const state = Blockly.serialization.workspaces.save(workspace);
                reset_workspace(workspace);
                try {
                    // CREATE NEW BLOCKS AND WORKSPACE
                    createBlocklyCode(tree.rootNode, distributor, undefined, null);
                } catch (error){
                    // IF ERROR PRINT
                    console.error(error);
                    variableNames.forEach(function(missingNode){
                        console.error("Missing in: ", missingNode.toString(), "\n", missingNode.text, "\n");
                    });
                    // AND RETURN BLOCKLY WORKSPACE TO ITS FORMER STATE
                    Blockly.serialization.workspaces.load(state, workspace);
                    return - 1;
                }
                return 0;
            }
            else{
                return -1;
            }
        });

        /**
         * Implementation of "Init Tests" button functionality for testing purposes
        **/
        test.addEventListener('click', async function (event) {
            let testSet = document.getElementById("tests");
            for (const test of codeSnippets[testSet.value]) {
                try {
                    const sourceCodeTree = parser.parse(test);
                    reset_workspace(workspace);
                    createBlocklyCode(sourceCodeTree.rootNode, distributor, undefined, null);
                    await new Promise(r => setTimeout(r, 100));
                    if (testSet.value === "both_way_check"){
                        let code = lua.luaGenerator.workspaceToCode(workspace);
                        console.assert(test.trim() === code.trim(), `\nTest failed!\nGenerated code:\n ${code}\nInput code:\n${test}`);
                    }
                } catch (error) {
                    console.error("Caught Error", error, "\n",
                        "This test case was the problem:\n", test);
                    break;
                }
            }
        });

        /**
         * Implementation of "API" button functionality used when testing API server for parsing code with Tree-Sitter
         * and creating Blockly Workspace.
         **/
        API.addEventListener('click', async function () {
            try {
                console.log(inputElement.value);
                let dataToSend = JSON.stringify({
                    "code": inputElement.value.toString(),
                });
                const response = await fetch('http://localhost:3000/parse', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: dataToSend
                });

                if (!response.ok) {
                    throw new Error('Failed to parse code');
                }

                const tree = await response.json();
                if(tree.children) {
                    // SAVE BLOCKLY WORKSPACE STATE AND PREPARE CLEAN WORKSPACE
                    reset_workspace(workspace);
                    // CREATE NEW BLOCKS AND WORKSPACE
                    createBlocklyCode(tree, distributor, undefined, null);
                    return 0;
                }
            } catch (error) {
                console.error('Error parsing code:', error);
                return null;
            }
        });
    });
}

createBlocks(newWorkspace);
