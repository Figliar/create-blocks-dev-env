/**
 * This file was taken from previous diploma thesis
 * @Title:  How to convert toolbox from xml to json and from json to xml?
 * @Author: johnnyoshika
 * @Date: 25.3.2022
 * @Availability: https://github.com/google/blockly/issues/4464
 */
const toolboxOptions = {
  contents: [
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_if"></block>',
          type: 'controls_if',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_compare"></block>',
          type: 'logic_compare',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_operation"></block>',
          type: 'logic_operation',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_negate"></block>',
          type: 'logic_negate',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_boolean"></block>',
          type: 'logic_boolean',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_null"></block>',
          type: 'logic_null',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_ternary"></block>',
          type: 'logic_ternary',
        },
      ],
      id: 'catLogic',
      colour: '210',
      name: 'Logic',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_repeat_ext">\n          <value name="TIMES">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_repeat_ext',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_whileUntil"></block>',
          type: 'controls_whileUntil',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_for">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n          <value name="BY">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_for',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_forEach"></block>',
          type: 'controls_forEach',
        },
        { kind: 'BLOCK', type: 'for_index_item' },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_flow_statements"></block>',
          type: 'controls_flow_statements',
        },
      ],
      id: 'catLoops',
      colour: '120',
      name: 'Loops',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_number"></block>',
          type: 'math_number',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_arithmetic">\n          <value name="A">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="B">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_arithmetic',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_single">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">9</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_single',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_trig">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">45</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_trig',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_constant"></block>',
          type: 'math_constant',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_number_property">\n          <value name="NUMBER_TO_CHECK">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_number_property',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_change">\n          <value name="DELTA">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_change',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_round">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">3.1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_round',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_on_list"></block>',
          type: 'math_on_list',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_modulo">\n          <value name="DIVIDEND">\n            <shadow type="math_number">\n              <field name="NUM">64</field>\n            </shadow>\n          </value>\n          <value name="DIVISOR">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_modulo',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_constrain">\n          <value name="VALUE">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="LOW">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="HIGH">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_constrain',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_random_int">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_random_int',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_random_float"></block>',
          type: 'math_random_float',
        },
        { kind: 'BLOCK', type: 'math_atan2' },
        { kind: 'BLOCK', type: 'math_cos' },
        { kind: 'BLOCK', type: 'math_sin' },
      ],
      id: 'catMath',
      colour: '230',
      name: 'Math',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="text"></block>',
          type: 'text',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="text_join"></block>',
          type: 'text_join',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_append">\n          <value name="TEXT">\n            <shadow type="text"></shadow>\n          </value>\n        </block>',
          type: 'text_append',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_length">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_length',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_isEmpty">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT"></field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_isEmpty',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n          <value name="FIND">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_indexOf',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_charAt">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_charAt',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_getSubstring">\n          <value name="STRING">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_getSubstring',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_changeCase">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_changeCase',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_trim">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_trim',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_print">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_print',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_prompt_ext">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_prompt_ext',
        },
      ],
      id: 'catText',
      colour: '160',
      name: 'Text',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_create_with">\n          <mutation items="0"></mutation>\n        </block>',
          type: 'lists_create_with',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_create_with"></block>',
          type: 'lists_create_with',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_repeat">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_repeat',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_length"></block>',
          type: 'lists_length',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_isEmpty"></block>',
          type: 'lists_isEmpty',
        },
        { kind: 'BLOCK', type: 'table_remove' },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_indexOf',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getIndex">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getIndex',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_setIndex">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_setIndex',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getSublist">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getSublist',
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_split">\n          <value name="DELIM">\n            <shadow type="text">\n              <field name="TEXT">,</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_split',
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_sort"></block>',
          type: 'lists_sort',
        },
      ],
      id: 'catLists',
      colour: '260',
      name: 'Lists',
    },
    {
      kind: 'CATEGORY',
        contents: [
            {
                kind: 'BLOCK',
                blockxml:
                    '<block type="shebang"/>',
                type: 'shebang',
            },
            {
                kind: 'BLOCK',
                blockxml: '<block type="comment"></block>',
                type: 'comment',
            },
        ],
      id: 'catAdditional',
      colour: '0',
      name: 'Additional',
    },
    // {
    //   kind: 'CATEGORY',
    //   contents: [
    //     {
    //       kind: 'BLOCK',
    //       blockxml: '<block type="colour_picker"></block>',
    //       type: 'colour_picker',
    //     },
    //     {
    //       kind: 'BLOCK',
    //       blockxml: '<block type="colour_random"></block>',
    //       type: 'colour_random',
    //     },
    //     {
    //       kind: 'BLOCK',
    //       blockxml:
    //         '<block type="colour_rgb">\n          <value name="RED">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n          <value name="GREEN">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="BLUE">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
    //       type: 'colour_rgb',
    //     },
    //     {
    //       kind: 'BLOCK',
    //       blockxml:
    //         '<block type="colour_blend">\n          <value name="COLOUR1">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#ff0000</field>\n            </shadow>\n          </value>\n          <value name="COLOUR2">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#3333ff</field>\n            </shadow>\n          </value>\n          <value name="RATIO">\n            <shadow type="math_number">\n              <field name="NUM">0.5</field>\n            </shadow>\n          </value>\n        </block>',
    //       type: 'colour_blend',
    //     },
    //   ],
    //   id: 'catColour',
    //   colour: '20',
    //   name: 'Color',
    // },
    {
      kind: 'SEP',
    },
    {
      kind: 'CATEGORY',
      id: 'catVariables',
      colour: '330',
      custom: 'VARIABLE',
      name: 'Variables',
    },
    {
      kind: 'CATEGORY',
      id: 'catFunctions',
      colour: '290',
      custom: 'PROCEDURE',
      name: 'Functions',
    },
    {
      kind: 'SEP',
    },
    {
      kind: 'CATEGORY',
      contents: [
        { kind: 'BLOCK', type: 'love_keypressed' },
        { kind: 'BLOCK', type: 'love_keyreleased' },
        { kind: 'BLOCK', type: 'love_directorydropped' },
        { kind: 'BLOCK', type: 'love_displayrotated' },
        { kind: 'BLOCK', type: 'love_draw' },
        { kind: 'BLOCK', type: 'love_errorhandler' },
        { kind: 'BLOCK', type: 'love_filedropped' },
        { kind: 'BLOCK', type: 'love_focus' },
        { kind: 'BLOCK', type: 'love_gamepadaxis' },
        { kind: 'BLOCK', type: 'love_gamepadpressed' },
        { kind: 'BLOCK', type: 'love_gamepadreleased' },
        { kind: 'BLOCK', type: 'love_joystickadded' },
        { kind: 'BLOCK', type: 'love_joystickaxis' },
        { kind: 'BLOCK', type: 'love_joystickhat' },
        { kind: 'BLOCK', type: 'love_joystickpressed' },
        { kind: 'BLOCK', type: 'love_joystickreleased' },
        { kind: 'BLOCK', type: 'love_joystickremoved' },
        { kind: 'BLOCK', type: 'love_load' },
        { kind: 'BLOCK', type: 'love_lowmemory' },
        { kind: 'BLOCK', type: 'love_mousefocus' },
        { kind: 'BLOCK', type: 'love_mousemoved' },
        { kind: 'BLOCK', type: 'love_mousepressed' },
        { kind: 'BLOCK', type: 'love_mousereleased' },
        { kind: 'BLOCK', type: 'love_quit' },
        { kind: 'BLOCK', type: 'love_resize' },
        { kind: 'BLOCK', type: 'love_run' },
        { kind: 'BLOCK', type: 'love_textedited' },
        { kind: 'BLOCK', type: 'love_textinput' },
        { kind: 'BLOCK', type: 'love_threaderror' },
        { kind: 'BLOCK', type: 'love_touchmoved' },
        { kind: 'BLOCK', type: 'love_touchpressed' },
        { kind: 'BLOCK', type: 'love_touchreleased' },
        { kind: 'BLOCK', type: 'love_update' },
        { kind: 'BLOCK', type: 'love_visible' },
        { kind: 'BLOCK', type: 'love_wheelmoved' },
      ],
      id: 'catCallbacks',
      colour: '230',
      name: 'Callbacks',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'graphics_setnewfont',
          inputs: {
            size: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_stencil',
          inputs: {
            keepvalues: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_rectangle',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            width: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            height: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            rx: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            ry: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            segments: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_printf',
          inputs: {
            text: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_print',
          inputs: {
            text: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            r: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            sx: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            sy: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            ox: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            oy: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            kx: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            ky: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_present' },
        { kind: 'BLOCK', type: 'graphics_polygon' },
        { kind: 'BLOCK', type: 'graphics_points' },
        { kind: 'BLOCK', type: 'graphics_line' },
        { kind: 'BLOCK', type: 'graphics_flushbatch' },
        { kind: 'BLOCK', type: 'graphics_ellipse' },
        { kind: 'BLOCK', type: 'graphics_drawlayer' },
        { kind: 'BLOCK', type: 'graphics_draw' },
        { kind: 'BLOCK', type: 'graphics_discard' },
        { kind: 'BLOCK', type: 'graphics_clear' },
        {
          kind: 'BLOCK',
          type: 'graphics_circle',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            radius: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_arc' },
        {
          kind: 'BLOCK',
          type: 'graphics_translate',
          inputs: {
            dx: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            dy: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_transformpoint',
          inputs: {
            globalX: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            globalY: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_shear',
          inputs: {
            kx: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            ky: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_scale',
          inputs: {
            sx: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            sy: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_rotate',
          inputs: {
            angle: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_push' },
        { kind: 'BLOCK', type: 'graphics_pop' },
        { kind: 'BLOCK', type: 'graphics_origin' },
        {
          kind: 'BLOCK',
          type: 'graphics_inversetransformpoint',
          inputs: {
            screenX: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            screenY: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_validateshader',
          inputs: {
            code: { shadow: { type: 'text', fields: { TEXT: 'code' } } },
            gles: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_newimage' },
        { kind: 'BLOCK', type: 'graphics_getwidth' },
        { kind: 'BLOCK', type: 'graphics_getpixelwidth' },
        { kind: 'BLOCK', type: 'graphics_getpixelheight' },
        { kind: 'BLOCK', type: 'graphics_getpixeldimensions' },
        { kind: 'BLOCK', type: 'graphics_getheight' },
        { kind: 'BLOCK', type: 'graphics_getdimensions' },
        { kind: 'BLOCK', type: 'graphics_getdpiscale' },
        { kind: 'BLOCK', type: 'graphics_getbackgroundcolor' },
        { kind: 'BLOCK', type: 'graphics_getcolor' },
        { kind: 'BLOCK', type: 'graphics_isgammacorrect' },
        { kind: 'BLOCK', type: 'graphics_isactive' },
        { kind: 'BLOCK', type: 'graphics_reset' },
        { kind: 'BLOCK', type: 'graphics_iswireframe' },
        { kind: 'BLOCK', type: 'graphics_setbackgroundcolor' },
        { kind: 'BLOCK', type: 'graphics_setcolor' },
        {
          kind: 'BLOCK',
          type: 'graphics_setwireframe',
          inputs: {
            enable: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'graphics_setscissor',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            width: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            height: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_getpointsize' },
        {
          kind: 'BLOCK',
          type: 'graphics_setpointsize',
          inputs: {
            size: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_getlinewidth' },
        {
          kind: 'BLOCK',
          type: 'graphics_setlinewidth',
          inputs: {
            width: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        { kind: 'BLOCK', type: 'graphics_setlinestyle' },
        { kind: 'BLOCK', type: 'graphics_setlinejoin' },
      ],
      id: 'catGraphics',
      colour: '290',
      name: 'Graphics',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'keyboard_settextinput',
          inputs: {
            enable: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'keyboard_setkeyrepeat',
          inputs: {
            enable: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'keyboard_isscancodedown' },
        { kind: 'BLOCK', type: 'keyboard_isdown' },
        { kind: 'BLOCK', type: 'keyboard_hastextinput' },
        { kind: 'BLOCK', type: 'keyboard_hasscreenkeyboard' },
        { kind: 'BLOCK', type: 'keyboard_haskeyrepeat' },
        { kind: 'BLOCK', type: 'keyboard_getscancodefromkey' },
        { kind: 'BLOCK', type: 'keyboard_getkeyfromscancode' },
      ],
      id: 'catKeyboard',
      colour: '30',
      name: 'Keyboard',
    },
    {
      kind: 'CATEGORY',
      contents: [
        { kind: 'BLOCK', type: 'touch_gettouches' },
        {
          kind: 'BLOCK',
          type: 'touch_getpressure',
          inputs: {
            id: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'touch_getposition',
          inputs: {
            id: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
      ],
      id: 'catTouch',
      colour: '60',
      name: 'Touch',
    },
    {
      kind: 'CATEGORY',
      contents: [
        { kind: 'BLOCK', type: 'window_close' },
        { kind: 'BLOCK', type: 'window_getdpiscale' },
        { kind: 'BLOCK', type: 'window_getfullscreen' },
        {
          kind: 'BLOCK',
          type: 'window_getdisplayname',
          inputs: {
            displayindex: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'window_getdisplayorientation',
          inputs: {
            displayindex: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'window_hasfocus' },
        { kind: 'BLOCK', type: 'window_gettitle' },
        { kind: 'BLOCK', type: 'window_getposition' },
        {
          kind: 'BLOCK',
          type: 'window_settitle',
          inputs: {
            title: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'window_setposition',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'window_setmode',
          inputs: {
            width: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            height: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'window_setfullscreen',
          inputs: {
            fullscreen: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'window_restore' },
        { kind: 'BLOCK', type: 'window_minimize' },
        { kind: 'BLOCK', type: 'window_maximize' },
        { kind: 'BLOCK', type: 'window_isvisible' },
        { kind: 'BLOCK', type: 'window_isopen' },
        { kind: 'BLOCK', type: 'window_isminimized' },
        { kind: 'BLOCK', type: 'window_ismaximized' },
        { kind: 'BLOCK', type: 'window_hasmousefocus' },
        { kind: 'BLOCK', type: 'window_getdisplaycount' },
      ],
      id: 'catWindow',
      colour: '90',
      name: 'Window',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'system_vibrate',
          inputs: {
            seconds: { shadow: { type: 'math_number', fields: { NUM: 5 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'system_setclipboardtext',
          inputs: {
            text: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'system_openurl',
          inputs: {
            url: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
          },
        },
        { kind: 'BLOCK', type: 'system_getprocessorcount' },
        { kind: 'BLOCK', type: 'system_getos' },
        { kind: 'BLOCK', type: 'system_getclipboardtext' },
        { kind: 'BLOCK', type: 'system_hasbackgroundmusic' },
      ],
      id: 'catSystem',
      colour: '120',
      name: 'System',
    },
    {
      kind: 'CATEGORY',
      contents: [
        { kind: 'BLOCK', type: 'timer_step' },
        {
          kind: 'BLOCK',
          type: 'timer_sleep',
          inputs: {
            s: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        { kind: 'BLOCK', type: 'timer_gettime' },
        { kind: 'BLOCK', type: 'timer_getfps' },
        { kind: 'BLOCK', type: 'timer_getdelta' },
        { kind: 'BLOCK', type: 'timer_getaveragedelta' },
      ],
      id: 'catTimer',
      colour: '150',
      name: 'Timer',
    },
    {
      kind: 'CATEGORY',
      contents: [
        { kind: 'BLOCK', type: 'math_triangulate' },
        {
          kind: 'BLOCK',
          type: 'math_setrandomstate',
          inputs: {
            state: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_setrandomseed',
          inputs: {
            seed: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_randomnormal',
          inputs: {
            stddev: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            mean: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_random',
          inputs: {
            min: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            max: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_noise',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'math_isconvex' },
        { kind: 'BLOCK', type: 'math_getrandomstate' },
        { kind: 'BLOCK', type: 'math_getrandomseed' },
        { kind: 'BLOCK', type: 'math_newrandomgenerator' },
      ],
      id: 'catMath',
      colour: '180',
      name: 'Math',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'mouse_sety',
          inputs: {
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'mouse_setx',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'mouse_setvisible',
          inputs: {
            visible: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'mouse_setrelativemode',
          inputs: {
            enable: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'mouse_setposition',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'mouse_setgrabbed',
          inputs: {
            grab: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'mouse_setcursor' },
        {
          kind: 'BLOCK',
          type: 'mouse_newcursor',
          inputs: {
            hotx: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            hoty: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'mouse_isvisible' },
        { kind: 'BLOCK', type: 'mouse_isgrabbed' },
        {
          kind: 'BLOCK',
          type: 'mouse_isdown',
          inputs: {
            button: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'mouse_gety' },
        { kind: 'BLOCK', type: 'mouse_getx' },
        { kind: 'BLOCK', type: 'mouse_getsystemcursor' },
        { kind: 'BLOCK', type: 'mouse_getrelativemode' },
        { kind: 'BLOCK', type: 'mouse_getposition' },
        { kind: 'BLOCK', type: 'mouse_getcursor' },
      ],
      id: 'catMouse',
      colour: '210',
      name: 'Mouse',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'physics_setmeter',
          inputs: {
            scale: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newworld',
          inputs: {
            xg: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            yg: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            sleep: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newwheeljoint',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            ax: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            ay: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            collideConnected: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newweldjoint',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newrectangleshape',
          inputs: {
            width: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            height: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'physics_newpolygonshape' },
        {
          kind: 'BLOCK',
          type: 'physics_newmousejoint',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'physics_getdistance' },
        { kind: 'BLOCK', type: 'physics_getmeter' },
        {
          kind: 'BLOCK',
          type: 'physics_newbody',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newcircleshape',
          inputs: {
            radius: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newchainshape',
          inputs: {
            loop: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newedgeshape',
          inputs: {
            x1: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            x2: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            x3: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            x4: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'physics_newfixture',
          inputs: {
            density: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
      ],
      id: 'catPhysics',
      colour: '270',
      name: 'Physics',
    },
    {
      kind: 'CATEGORY',
      contents: [
        { kind: 'BLOCK', type: 'audio_setdistancemodel' },
        {
          kind: 'BLOCK',
          type: 'audio_setdopplerscale',
          inputs: {
            scale: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
          },
        },
        { kind: 'BLOCK', type: 'audio_seteffect' },
        {
          kind: 'BLOCK',
          type: 'audio_setmixwithsystem',
          inputs: {
            mix: { shadow: { type: 'logic_boolean' } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'audio_setorientation',
          inputs: {
            fx: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            fy: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            fz: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            ux: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            uy: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            uz: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'audio_setposition',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            z: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'audio_setvelocity',
          inputs: {
            x: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            y: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            z: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'audio_setvolume' },
        { kind: 'BLOCK', type: 'audio_stop' },
        { kind: 'BLOCK', type: 'audio_pause' },
        { kind: 'BLOCK', type: 'audio_newsource' },
        { kind: 'BLOCK', type: 'audio_iseffectssupported' },
        { kind: 'BLOCK', type: 'audio_getvolume' },
        { kind: 'BLOCK', type: 'audio_getvelocity' },
        { kind: 'BLOCK', type: 'audio_getrecordingdevices' },
        { kind: 'BLOCK', type: 'audio_getposition' },
        { kind: 'BLOCK', type: 'audio_getorientation' },
        { kind: 'BLOCK', type: 'audio_getmaxsourceeffects' },
        { kind: 'BLOCK', type: 'audio_getmaxsceneeffects' },
        { kind: 'BLOCK', type: 'audio_getdistancemodel' },
        {
          kind: 'BLOCK',
          type: 'audio_geteffect',
          inputs: {
            name: { shadow: { type: 'text', fields: { TEXT: 'name' } } },
          },
        },
        { kind: 'BLOCK', type: 'audio_getdopplerscale' },
        { kind: 'BLOCK', type: 'audio_getactivesourcecount' },
        { kind: 'BLOCK', type: 'audio_getactiveeffects' },
      ],
      id: 'catAudio',
      colour: '0',
      name: 'Audio',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'filesystem_append',
          inputs: {
            name: { shadow: { type: 'text', fields: { TEXT: 'name' } } },
            data: { shadow: { type: 'text', fields: { TEXT: 'data' } } },
            size: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_aresymlinksenabled' },
        {
          kind: 'BLOCK',
          type: 'filesystem_createdirectory',
          inputs: {
            name: { shadow: { type: 'text', fields: { TEXT: 'name' } } },
          },
        },
        {
          kind: 'BLOCK',
          type: 'filesystem_getdirectoryitems',
          inputs: {
            name: { shadow: { type: 'text', fields: { TEXT: 'name' } } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_getidentity' },
        { kind: 'BLOCK', type: 'filesystem_getinfo' },
        { kind: 'BLOCK', type: 'filesystem_getrequirepath' },
        { kind: 'BLOCK', type: 'filesystem_getrealdirectory' },
        { kind: 'BLOCK', type: 'filesystem_getsavedirectory' },
        { kind: 'BLOCK', type: 'filesystem_getsource' },
        { kind: 'BLOCK', type: 'filesystem_getuserdirectory' },
        { kind: 'BLOCK', type: 'filesystem_getworkingdirectory' },
        {
          kind: 'BLOCK',
          type: 'filesystem_init',
          inputs: {
            appname: { shadow: { type: 'text', fields: { TEXT: 'name' } } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_lines' },
        { kind: 'BLOCK', type: 'filesystem_load' },
        {
          kind: 'BLOCK',
          type: 'filesystem_mount',
          inputs: {
            archive: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
            mountpoint: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
            appendToPath: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_newfile' },
        {
          kind: 'BLOCK',
          type: 'filesystem_read',
          inputs: {
            size: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_remove' },
        {
          kind: 'BLOCK',
          type: 'filesystem_setidentity',
          inputs: {
            appendToPath: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_setrequirepath' },
        { kind: 'BLOCK', type: 'filesystem_setsource' },
        {
          kind: 'BLOCK',
          type: 'filesystem_setsymlinksenabled',
          inputs: {
            enable: { shadow: { type: 'logic_boolean' } },
          },
        },
        { kind: 'BLOCK', type: 'filesystem_unmount' },
        {
          kind: 'BLOCK',
          type: 'filesystem_write',
          inputs: {
            data: { shadow: { type: 'text', fields: { TEXT: 'abc' } } },
            size: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
          },
        },
      ],
      id: 'catFilesystem',
      colour: '140',
      name: 'Filesystem',
    },
  ],
  id: 'toolbox',
  style: 'display: none',
}

