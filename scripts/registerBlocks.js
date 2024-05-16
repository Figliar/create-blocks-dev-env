/**
 * In this file we register blocks from allBlocks.js file
 * and also define generators for these blocks
 */
Blockly.common.defineBlocksWithJsonArray(allBlocks);

lua.luaGenerator.forBlock['shebang'] = function(block) {
  return block.getFieldValue("shebang_context") + "\n";
};

lua.luaGenerator.forBlock['procedures_ifreturn'] = function(block) {
  const value = lua.luaGenerator.valueToCode(block, 'VALUE', lua.luaGenerator.ORDER_ATOMIC);
  return 'return ' + value + '\n';
};

lua.luaGenerator.forBlock["controls_for"] = function (block) {
    const with_ = lua.luaGenerator.nameDB_.getName(block.getFieldValue('VAR'), 'VARIABLE');
    const from = lua.luaGenerator.valueToCode(block, 'FROM', lua.luaGenerator.ORDER_ATOMIC);
    const to = lua.luaGenerator.valueToCode(block, 'TO', lua.luaGenerator.ORDER_ATOMIC);
    let tempBy = lua.luaGenerator.valueToCode(block, 'BY', lua.luaGenerator.ORDER_ATOMIC);
    const statementsInput = lua.luaGenerator.statementToCode(block, 'DO');
    const by = tempBy ? tempBy : 1;
    return 'for ' + with_ + ' = ' + from + ', ' + to + ', ' + by + ' do\n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["comment"] = function (block) {
    return '--' + block.getFieldValue('COMMENT_CONTEXT').toString() + '\n'
}

lua.luaGenerator.forBlock["local_variable"] = function (block) {
    const argument0 = lua.luaGenerator.valueToCode(block, 'TO', lua.luaGenerator.ORDER_NONE)
    const variable = lua.luaGenerator.getVariableName(block.getFieldValue('VAR'))
    return 'local ' + variable + ' = ' + argument0 + '\n'
}

lua.luaGenerator.forBlock["lists_create_with"] = function (block) {
    const elements = new Array(block.itemCount_);
    for (let i = 0; i < block.itemCount_; i++) {
        elements[i] =
            lua.luaGenerator.valueToCode(block, 'ADD' + i, lua.luaGenerator.ORDER_NONE) || 'nil';
    }
    const code = '{' + elements.join(', ') + '}';
    return [code, lua.luaGenerator.ORDER_HIGH];
}

lua.luaGenerator.forBlock["math_sin"] = function (block) {
    const valueValue = lua.luaGenerator.valueToCode(block, 'value', lua.luaGenerator.ORDER_ATOMIC);
    const code = 'math.sin(' + valueValue + ')';
    return [code, lua.luaGenerator.ORDER_NONE];
}

lua.luaGenerator.forBlock["math_cos"] = function (block) {
    const valueVal = lua.luaGenerator.valueToCode(block, 'val', lua.luaGenerator.ORDER_ATOMIC);
    const code = 'math.cos(' + valueVal + ')';
    return [code, lua.luaGenerator.ORDER_NONE];
}

lua.luaGenerator.forBlock["for_index_item"] = function (block) {
    const variableIndex = lua.luaGenerator.nameDB_.getName(block.getFieldValue('index'), 'VARIABLE')
    const variableItem = lua.luaGenerator.nameDB_.getName(block.getFieldValue('item'), 'VARIABLE')
    const valueArray = lua.luaGenerator.valueToCode(block, 'array', lua.luaGenerator.ORDER_ATOMIC)
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'for ' + variableIndex + ', ' + variableItem + ' in ipairs(' + valueArray + ') do\n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["table_remove"] = function (block) {
    const valueTable = lua.luaGenerator.valueToCode(block, 'table', lua.luaGenerator.ORDER_ATOMIC)
    const valueIndex = lua.luaGenerator.valueToCode(block, 'index', lua.luaGenerator.ORDER_ATOMIC)
    return 'table.remove(' + valueTable + ', ' + valueIndex + ')\n'
}

lua.luaGenerator.forBlock["graphics_setnewfont"] = function (block) {
    const valueSize = lua.luaGenerator.valueToCode(block, 'size', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.setNewFont( ' + valueSize + ' )\n'
}

lua.luaGenerator.forBlock["love_mousereleased"] = function (block) {
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableButton = lua.luaGenerator.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const variableIstouchy = lua.luaGenerator.nameDB_.getName(block.getFieldValue('istouchy'), 'VARIABLE')
    const variablePresses = lua.luaGenerator.nameDB_.getName(block.getFieldValue('presses'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.mousereleased( ' + variableX + ', ' + variableY + ', ' + variableButton + ', ' + variableIstouchy + ', ' + variablePresses + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_keypressed"] = function (block) {
    const variableKey = lua.luaGenerator.nameDB_.getName(block.getFieldValue('key'), 'VARIABLE')
    const variableScancode = lua.luaGenerator.nameDB_.getName(block.getFieldValue('scancode'), 'VARIABLE')
    const variableIsrepeat = lua.luaGenerator.nameDB_.getName(block.getFieldValue('isrepeat'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.keypressed( ' + variableKey + ', ' + variableScancode + ', ' + variableIsrepeat + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_keyreleased"] = function (block) {
    const variableKey = lua.luaGenerator.nameDB_.getName(block.getFieldValue('key'), 'VARIABLE')
    const variableScancode = lua.luaGenerator.nameDB_.getName(block.getFieldValue('scancode'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.keyreleased( ' + variableKey + ', ' + variableScancode + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_directorydropped"] = function (block) {
    const variablePath = lua.luaGenerator.nameDB_.getName(block.getFieldValue('path'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.directorydropped( ' + variablePath + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_displayrotated"] = function (block) {
    const variableIndex = lua.luaGenerator.nameDB_.getName(block.getFieldValue('index'), 'VARIABLE')
    const variableOrientation = lua.luaGenerator.nameDB_.getName(block.getFieldValue('orientation'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.displayrotated( ' + variableIndex + ', ' + variableOrientation + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_draw"] = function (block) {
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.draw() \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_errorhandler"] = function (block) {
    const variableMsg = lua.luaGenerator.nameDB_.getName(block.getFieldValue('msg'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.errorhandler( ' + variableMsg + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_filedropped"] = function (block) {
    const variableFile = lua.luaGenerator.nameDB_.getName(block.getFieldValue('file'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.filedropped( ' + variableFile + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_focus"] = function (block) {
    const variableFocus = lua.luaGenerator.nameDB_.getName(block.getFieldValue('focus'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.focus( ' + variableFocus + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_gamepadaxis"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableAxis = lua.luaGenerator.nameDB_.getName(block.getFieldValue('axis'), 'VARIABLE')
    const variableValue = lua.luaGenerator.nameDB_.getName(block.getFieldValue('value'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.gamepadaxis( ' + variableJoystick + ', ' + variableAxis + ', ' + variableValue + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_gamepadpressed"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = lua.luaGenerator.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.gamepadpressed( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_gamepadreleased"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = lua.luaGenerator.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.gamepadreleased( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_joystickadded"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.joystickadded( ' + variableJoystick + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_joystickaxis"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableAxis = lua.luaGenerator.nameDB_.getName(block.getFieldValue('axis'), 'VARIABLE')
    const variableValue = lua.luaGenerator.nameDB_.getName(block.getFieldValue('value'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.joystickaxis( ' + variableJoystick + ', ' + variableAxis + ', ' + variableValue + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_joystickhat"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableHat = lua.luaGenerator.nameDB_.getName(block.getFieldValue('hat'), 'VARIABLE')
    const variableDirection = lua.luaGenerator.nameDB_.getName(block.getFieldValue('direction'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.joystickhat( ' + variableJoystick + ', ' + variableHat + ', ' + variableDirection + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_joystickpressed"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = lua.luaGenerator.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.joystickpressed( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_joystickreleased"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = lua.luaGenerator.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.joystickreleased( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_joystickremoved"] = function (block) {
    const variableJoystick = lua.luaGenerator.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.joystickremoved( ' + variableJoystick + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_load"] = function (block) {
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.load() \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_lowmemory"] = function (block) {
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.lowmemory() \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_mousefocus"] = function (block) {
    const variableFocus = lua.luaGenerator.nameDB_.getName(block.getFieldValue('focus'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.mousefocus( ' + variableFocus + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_mousemoved"] = function (block) {
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variableIstouch = lua.luaGenerator.nameDB_.getName(block.getFieldValue('istouch'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.mousemoved( ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variableIstouch + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_mousepressed"] = function (block) {
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableButton = lua.luaGenerator.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const variableIstouch = lua.luaGenerator.nameDB_.getName(block.getFieldValue('istouch'), 'VARIABLE')
    const variablePresses = lua.luaGenerator.nameDB_.getName(block.getFieldValue('presses'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.mousepressed( ' + variableX + ', ' + variableY + ', ' + variableButton + ', ' + variableIstouch + ', ' + variablePresses + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_quit"] = function (block) {
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.quit() \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_resize"] = function (block) {
    const variableWidth = lua.luaGenerator.nameDB_.getName(block.getFieldValue('width'), 'VARIABLE')
    const variableHeight = lua.luaGenerator.nameDB_.getName(block.getFieldValue('height'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.resize( ' + variableWidth + ', ' + variableHeight + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_run"] = function (block) {
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.run() \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_textedited"] = function (block) {
    const variableText = lua.luaGenerator.nameDB_.getName(block.getFieldValue('text'), 'VARIABLE')
    const variableStart = lua.luaGenerator.nameDB_.getName(block.getFieldValue('start'), 'VARIABLE')
    const variableLength = lua.luaGenerator.nameDB_.getName(block.getFieldValue('length'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.textedited( ' + variableText + ', ' + variableStart + ', ' + variableLength + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_textinput"] = function (block) {
    const variableText = lua.luaGenerator.nameDB_.getName(block.getFieldValue('text'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.textinput( ' + variableText + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_threaderror"] = function (block) {
    const variableThread = lua.luaGenerator.nameDB_.getName(block.getFieldValue('thread'), 'VARIABLE')
    const variableErrorstr = lua.luaGenerator.nameDB_.getName(block.getFieldValue('errorstr'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.threaderror( ' + variableThread + ', ' + variableErrorstr + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_touchmoved"] = function (block) {
    const variableId = lua.luaGenerator.nameDB_.getName(block.getFieldValue('id'), 'VARIABLE')
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variablePressure = lua.luaGenerator.nameDB_.getName(block.getFieldValue('pressure'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.touchmoved( ' + variableId + ', ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variablePressure + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_touchpressed"] = function (block) {
    const variableId = lua.luaGenerator.nameDB_.getName(block.getFieldValue('id'), 'VARIABLE')
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variablePressure = lua.luaGenerator.nameDB_.getName(block.getFieldValue('pressure'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.touchpressed( ' + variableId + ', ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variablePressure + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_touchreleased"] = function (block) {
    const variableId = lua.luaGenerator.nameDB_.getName(block.getFieldValue('id'), 'VARIABLE')
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variablePressure = lua.luaGenerator.nameDB_.getName(block.getFieldValue('pressure'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.touchreleased( ' + variableId + ', ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variablePressure + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_update"] = function (block) {
    const variableDt = lua.luaGenerator.nameDB_.getName(block.getFieldValue('dt'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.update( ' + variableDt + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_visible"] = function (block) {
    const variableVisible = lua.luaGenerator.nameDB_.getName(block.getFieldValue('visible'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.visible( ' + variableVisible + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["love_wheelmoved"] = function (block) {
    const variableX = lua.luaGenerator.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = lua.luaGenerator.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const statementsInput = lua.luaGenerator.statementToCode(block, 'input')
    return 'function love.wheelmoved( ' + variableX + ', ' + variableY + ' ) \n' + statementsInput + 'end\n'
}

lua.luaGenerator.forBlock["graphics_stencil"] = function (block) {
    const textStencilfunction = block.getFieldValue('stencilfunction')
    const dropdownAction = block.getFieldValue('action')
    const numberValue = block.getFieldValue('value')
    const valueKeepvalues = lua.luaGenerator.valueToCode(block, 'keepvalues', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.stencil( ' + textStencilfunction + ', "' + dropdownAction + '", ' + numberValue + ', ' + valueKeepvalues + ' )\n'
}

lua.luaGenerator.forBlock["graphics_rectangle"] = function (block) {
    const dropdownMode = block.getFieldValue('mode')
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueWidth = lua.luaGenerator.valueToCode(block, 'width', lua.luaGenerator.ORDER_ATOMIC)
    const valueHeight = lua.luaGenerator.valueToCode(block, 'height', lua.luaGenerator.ORDER_ATOMIC)
    const valueRx = lua.luaGenerator.valueToCode(block, 'rx', lua.luaGenerator.ORDER_ATOMIC)
    const valueRy = lua.luaGenerator.valueToCode(block, 'ry', lua.luaGenerator.ORDER_ATOMIC)
    const valueSegments = lua.luaGenerator.valueToCode(block, 'segments', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.rectangle("' + dropdownMode + '", ' + valueX + ', ' + valueY + ', ' + valueWidth + ', ' + valueHeight + ', ' + valueRx + ', ' + valueRy + ', ' + valueSegments + ')\n'
}

lua.luaGenerator.forBlock["graphics_printf"] = function (block) {
    const valueText = lua.luaGenerator.valueToCode(block, 'text', lua.luaGenerator.ORDER_ATOMIC)
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberLimit = block.getFieldValue('limit')
    const dropdownAlignmode = block.getFieldValue('AlignMode')
    const numberR = block.getFieldValue('r')
    const numberSx = block.getFieldValue('sx')
    const numberSy = block.getFieldValue('sy')
    const numberOx = block.getFieldValue('ox')
    const numberOy = block.getFieldValue('oy')
    const numberKx = block.getFieldValue('kx')
    const numberKy = block.getFieldValue('ky')
    return 'love.graphics.printf(' + valueText + ', ' + numberX + ', ' + numberY + ', ' + numberLimit + ', "' + dropdownAlignmode + '", ' + numberR + ', ' + numberSx + ', ' + numberSy + ' , ' + numberOx + ', ' + numberOy + ', ' + numberKx + ', ' + numberKy + ')\n'
}

lua.luaGenerator.forBlock["graphics_print"] = function (block) {
    const valueText = lua.luaGenerator.valueToCode(block, 'text', lua.luaGenerator.ORDER_ATOMIC)
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueR = lua.luaGenerator.valueToCode(block, 'r', lua.luaGenerator.ORDER_ATOMIC)
    const valueSx = lua.luaGenerator.valueToCode(block, 'sx', lua.luaGenerator.ORDER_ATOMIC)
    const valueSy = lua.luaGenerator.valueToCode(block, 'sy', lua.luaGenerator.ORDER_ATOMIC)
    const valueOx = lua.luaGenerator.valueToCode(block, 'ox', lua.luaGenerator.ORDER_ATOMIC)
    const valueOy = lua.luaGenerator.valueToCode(block, 'oy', lua.luaGenerator.ORDER_ATOMIC)
    const valueKx = lua.luaGenerator.valueToCode(block, 'kx', lua.luaGenerator.ORDER_ATOMIC)
    const valueKy = lua.luaGenerator.valueToCode(block, 'ky', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.print(' + valueText + ', ' + valueX + ', ' + valueY + ', ' + valueR + ', ' + valueSx + ', ' + valueSy + ' , ' + valueOx + ', ' + valueOy + ', ' + valueKx + ', ' + valueKy + ')\n'
}

lua.luaGenerator.forBlock["graphics_present"] = function () {
    return 'love.graphics.present()\n'
}

lua.luaGenerator.forBlock["graphics_polygon"] = function (block) {
    const dropdownDrawmode = block.getFieldValue('DrawMode')
    const valueVertices = lua.luaGenerator.valueToCode(block, 'vertices', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.polygon("' + dropdownDrawmode + '", ' + valueVertices + ')\n'
}

lua.luaGenerator.forBlock["graphics_points"] = function (block) {
    const valuePoints = lua.luaGenerator.valueToCode(block, 'points', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.points( ' + valuePoints + ' )\n'
}

lua.luaGenerator.forBlock["graphics_line"] = function (block) {
    const valuePoints = lua.luaGenerator.valueToCode(block, 'points', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.line( ' + valuePoints + ' )\n'
}

lua.luaGenerator.forBlock["graphics_flushbatch"] = function () {
    return 'love.graphics.flushBatch()\n'
}

lua.luaGenerator.forBlock["graphics_ellipse"] = function (block) {
    const dropdownDrawmode = block.getFieldValue('DrawMode')
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberRadiusx = block.getFieldValue('radiusx')
    const numberRadiusy = block.getFieldValue('radiusy')
    const numberSegments = block.getFieldValue('segments')
    return 'love.graphics.ellipse("' + dropdownDrawmode + '", ' + numberX + ', ' + numberY + ', ' + numberRadiusx + ', ' + numberRadiusy + ', ' + numberSegments + ' )\n'
}

lua.luaGenerator.forBlock["graphics_drawlayer"] = function (block) {
    const valueTexture = lua.luaGenerator.valueToCode(block, 'texture', lua.luaGenerator.ORDER_ATOMIC)
    const numberLayerindex = block.getFieldValue('layerindex')
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberR = block.getFieldValue('r')
    const numberSx = block.getFieldValue('sx')
    const numberSy = block.getFieldValue('sy')
    const numberOx = block.getFieldValue('ox')
    const numberOy = block.getFieldValue('oy')
    const numberKx = block.getFieldValue('kx')
    const numberKy = block.getFieldValue('ky')
    return 'love.graphics.drawLayer(' + valueTexture + ', ' + numberLayerindex + ', ' + numberX + ', ' + numberY + ', ' + numberR + ', ' + numberSx + ', ' + numberSy + ' , ' + numberOx + ', ' + numberOy + ', ' + numberKx + ', ' + numberKy + ')\n'
}

lua.luaGenerator.forBlock["graphics_draw"] = function (block) {
    const valueDrawable = lua.luaGenerator.valueToCode(block, 'drawable', lua.luaGenerator.ORDER_ATOMIC)
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberR = block.getFieldValue('r')
    const numberSx = block.getFieldValue('sx')
    const numberSy = block.getFieldValue('sy')
    const numberOx = block.getFieldValue('ox')
    const numberOy = block.getFieldValue('oy')
    const numberKx = block.getFieldValue('kx')
    const numberKy = block.getFieldValue('ky')
    return 'love.graphics.draw(' + valueDrawable + ', ' + numberX + ', ' + numberY + ', ' + numberR + ', ' + numberSx + ', ' + numberSy + ' , ' + numberOx + ', ' + numberOy + ', ' + numberKx + ', ' + numberKy + ')\n'
}

lua.luaGenerator.forBlock["graphics_discard"] = function (block) {
    const valueDiscardcolor = lua.luaGenerator.valueToCode(block, 'discardcolor', lua.luaGenerator.ORDER_ATOMIC)
    const valueDiscardstencil = lua.luaGenerator.valueToCode(block, 'discardstencil', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.discard(' + valueDiscardcolor + ', ' + valueDiscardstencil + ' )\n'
}

lua.luaGenerator.forBlock["graphics_clear"] = function () {
    return 'love.graphics.clear()\n'
}

lua.luaGenerator.forBlock["graphics_circle"] = function (block) {
    const dropdownMode = block.getFieldValue('mode')
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueRadius = lua.luaGenerator.valueToCode(block, 'radius', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.circle("' + dropdownMode + '", ' + valueX + ', ' + valueY + ', ' + valueRadius + ')\n'
}

lua.luaGenerator.forBlock["graphics_arc"] = function (block) {
    const dropdownDrawmode = block.getFieldValue('drawmode')
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberRadius = block.getFieldValue('radius')
    const angleAngle1 = block.getFieldValue('angle1')
    const angleAngle2 = block.getFieldValue('angle2')
    const numberSegments = block.getFieldValue('segments')
    return 'love.graphics.arc("' + dropdownDrawmode + '", ' + numberX + ', ' + numberY + ', ' + numberRadius + ', ' + angleAngle1 + ', ' + angleAngle2 + ' , ' + numberSegments + ')\n'
}

lua.luaGenerator.forBlock["graphics_translate"] = function (block) {
    const valueDx = lua.luaGenerator.valueToCode(block, 'dx', lua.luaGenerator.ORDER_ATOMIC)
    const valueDy = lua.luaGenerator.valueToCode(block, 'dy', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.translate( ' + valueDx + ', ' + valueDy + ' )\n'
}

lua.luaGenerator.forBlock["graphics_transformpoint"] = function (block) {
    const valueGlobalx = lua.luaGenerator.valueToCode(block, 'globalX', lua.luaGenerator.ORDER_ATOMIC)
    const valueGlobaly = lua.luaGenerator.valueToCode(block, 'globalY', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.graphics.transformPoint( ' + valueGlobalx + ', ' + valueGlobaly + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_shear"] = function (block) {
    const valueKx = lua.luaGenerator.valueToCode(block, 'kx', lua.luaGenerator.ORDER_ATOMIC)
    const valueKy = lua.luaGenerator.valueToCode(block, 'ky', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.shear( ' + valueKx + ', ' + valueKy + ' )\n'
}

lua.luaGenerator.forBlock["graphics_scale"] = function (block) {
    const valueSx = lua.luaGenerator.valueToCode(block, 'sx', lua.luaGenerator.ORDER_ATOMIC)
    const valueSy = lua.luaGenerator.valueToCode(block, 'sy', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.scale( ' + valueSx + ', ' + valueSy + ' )\n'
}

lua.luaGenerator.forBlock["graphics_rotate"] = function (block) {
    const valueAngle = lua.luaGenerator.valueToCode(block, 'angle', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.rotate( ' + valueAngle + ' )\n'
}

lua.luaGenerator.forBlock["graphics_push"] = function () {
    return 'love.graphics.push()\n'
}

lua.luaGenerator.forBlock["graphics_pop"] = function () {
    return 'love.graphics.pop()\n'
}

lua.luaGenerator.forBlock["graphics_origin"] = function () {
    return 'love.graphics.origin()\n'
}

lua.luaGenerator.forBlock["graphics_inversetransformpoint"] = function (block) {
    const valueScreenx = lua.luaGenerator.valueToCode(block, 'screenX', lua.luaGenerator.ORDER_ATOMIC)
    const valueScreeny = lua.luaGenerator.valueToCode(block, 'screenY', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.graphics.inverseTransformPoint( ' + valueScreenx + ', ' + valueScreeny + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_validateshader"] = function (block) {
    const valueGles = lua.luaGenerator.valueToCode(block, 'gles', lua.luaGenerator.ORDER_ATOMIC)
    const valueCode = lua.luaGenerator.valueToCode(block, 'code', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.graphics.validateShader( ' + valueGles + ', ' + valueCode + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_newimage"] = function (block) {
    const textFilename = block.getFieldValue('filename')
    const code = 'love.graphics.newImage( "' + textFilename + '" )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getwidth"] = function () {
    const code = 'love.graphics.getWidth()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getpixelwidth"] = function () {
    const code = 'love.graphics.getPixelWidth()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getpixelheight"] = function () {
    const code = 'love.graphics.getPixelHeight()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getpixeldimensions"] = function () {
    const code = 'love.graphics.getPixelDimensions()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getheight"] = function () {
    const code = 'love.graphics.getHeight()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getdimensions"] = function () {
    const code = 'love.graphics.getDimensions()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getdpiscale"] = function () {
    const code = 'love.graphics.getDPIScale()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getbackgroundcolor"] = function () {
    const code = 'love.graphics.getBackgroundColor()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_getcolor"] = function () {
    const code = 'love.graphics.getColor()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_isgammacorrect"] = function () {
    const code = 'love.graphics.isGammaCorrect()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_isactive"] = function () {
    const code = 'love.graphics.isActive()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_reset"] = function () {
    return 'love.graphics.reset()\n'
}

lua.luaGenerator.forBlock["graphics_iswireframe"] = function () {
    const code = 'love.graphics.isWireframe()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_setbackgroundcolor"] = function (block) {
    const numberRed = block.getFieldValue('red')
    const numberGreen = block.getFieldValue('green')
    const numberBlue = block.getFieldValue('blue')
    const numberAlpha = block.getFieldValue('alpha')
    return 'love.graphics.setBackgroundColor(' + numberRed + ', ' + numberGreen + ', ' + numberBlue + ', ' + numberAlpha + ')\n'
}

lua.luaGenerator.forBlock["graphics_setcolor"] = function (block) {
    const numberRed = block.getFieldValue('red')
    const numberGreen = block.getFieldValue('green')
    const numberBlue = block.getFieldValue('blue')
    const numberAlpha = block.getFieldValue('alpha')
    return 'love.graphics.setColor(' + numberRed + ', ' + numberGreen + ', ' + numberBlue + ', ' + numberAlpha + ')\n'
}

lua.luaGenerator.forBlock["graphics_setwireframe"] = function (block) {
    const valueEnable = lua.luaGenerator.valueToCode(block, 'enable', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.setWireframe(' + valueEnable + ')\n'
}

lua.luaGenerator.forBlock["graphics_setscissor"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueWidth = lua.luaGenerator.valueToCode(block, 'width', lua.luaGenerator.ORDER_ATOMIC)
    const valueHeight = lua.luaGenerator.valueToCode(block, 'height', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.setScissor(' + valueX + ', ' + valueY + ', ' + valueWidth + ', ' + valueHeight + ')\n'
}

lua.luaGenerator.forBlock["graphics_getpointsize"] = function () {
    const code = 'love.graphics.getPointSize()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_setpointsize"] = function (block) {
    const valueSize = lua.luaGenerator.valueToCode(block, 'size', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.setPointSize(' + valueSize + ')\n'
}

lua.luaGenerator.forBlock["graphics_getlinewidth"] = function () {
    const code = 'love.graphics.getLineWidth()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["graphics_setlinewidth"] = function (block) {
    const valueWidth = lua.luaGenerator.valueToCode(block, 'width', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.graphics.setLineWidth(' + valueWidth + ')\n'
}

lua.luaGenerator.forBlock["graphics_setlinestyle"] = function (block) {
    const dropdownStyle = block.getFieldValue('style')
    return 'love.graphics.setLineStyle("' + dropdownStyle + '")\n'
}

lua.luaGenerator.forBlock["graphics_setlinejoin"] = function (block) {
    const dropdownJoin = block.getFieldValue('join')
    return 'love.graphics.setLineJoin("' + dropdownJoin + '")\n'
}

lua.luaGenerator.forBlock["keyboard_settextinput"] = function (block) {
    const valueEnable = lua.luaGenerator.valueToCode(block, 'enable', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.keyboard.setTextInput(' + valueEnable + ')\n'
}

lua.luaGenerator.forBlock["keyboard_setkeyrepeat"] = function (block) {
    const valueEnable = lua.luaGenerator.valueToCode(block, 'enable', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.keyboard.setKeyRepeat(' + valueEnable + ')\n'
}

lua.luaGenerator.forBlock["keyboard_isscancodedown"] = function (block) {
    const textScancode = block.getFieldValue('scancode')
    const code = 'love.keyboard.isScancodeDown(' + textScancode + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["keyboard_isdown"] = function (block) {
    const textKey = block.getFieldValue('key')
    const code = 'love.keyboard.isDown("' + textKey + '")'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["keyboard_hastextinput"] = function () {
    const code = 'love.keyboard.hasTextInput()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["keyboard_hasscreenkeyboard"] = function () {
    const code = 'love.keyboard.hasScreenKeyboard()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["keyboard_haskeyrepeat"] = function () {
    const code = 'love.keyboard.hasKeyRepeat()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["keyboard_getscancodefromkey"] = function (block) {
    const textKey = block.getFieldValue('key')
    const code = 'love.keyboard.getScancodeFromKey(' + textKey + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["keyboard_getkeyfromscancode"] = function (block) {
    const textScancode = block.getFieldValue('scancode')
    const code = 'love.keyboard.getKeyFromScancode(' + textScancode + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["touch_gettouches"] = function () {
    const code = 'love.touch.getTouches()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["touch_getpressure"] = function (block) {
    const valueId = lua.luaGenerator.valueToCode(block, 'id', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.touch.getPressure(' + valueId + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["touch_getposition"] = function (block) {
    const valueId = lua.luaGenerator.valueToCode(block, 'id', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.touch.getPosition(' + valueId + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_close"] = function () {
    return 'love.window.close()\n'
}

lua.luaGenerator.forBlock["window_getdpiscale"] = function () {
    const code = 'love.window.getDPIScale()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_getfullscreen"] = function () {
    const code = 'love.window.getFullscreen()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_getdisplayname"] = function (block) {
    const valueDisplayindex = lua.luaGenerator.valueToCode(block, 'displayindex', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.window.getDisplayName(' + valueDisplayindex + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_getdisplayorientation"] = function (block) {
    const valueDisplayindex = lua.luaGenerator.valueToCode(block, 'displayindex', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.window.getDisplayOrientation( ' + valueDisplayindex + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_hasfocus"] = function () {
    const code = 'love.window.hasFocus()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_gettitle"] = function () {
    const code = 'love.window.getTitle()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_getposition"] = function () {
    const code = 'love.window.getPosition( )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_settitle"] = function (block) {
    const valueTitle = lua.luaGenerator.valueToCode(block, 'title', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.window.setTitle( ' + valueTitle + ' )\n'
}

lua.luaGenerator.forBlock["window_setposition"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const numberDisplayindex = block.getFieldValue('displayindex')
    return 'love.window.setPosition( ' + valueX + ', ' + valueY + ', ' + numberDisplayindex + ' )\n'
}

lua.luaGenerator.forBlock["window_setmode"] = function (block) {
    const valueWidth = lua.luaGenerator.valueToCode(block, 'width', lua.luaGenerator.ORDER_ATOMIC)
    const valueHeight = lua.luaGenerator.valueToCode(block, 'height', lua.luaGenerator.ORDER_ATOMIC)
    const valueFlags = lua.luaGenerator.valueToCode(block, 'flags', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.window.setMode( ' + valueWidth + ', ' + valueHeight + ', ' + valueFlags + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_setfullscreen"] = function (block) {
    const valueFullscreen = lua.luaGenerator.valueToCode(block, 'fullscreen', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.window.setFullscreen( ' + valueFullscreen + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_restore"] = function () {
    return 'love.window.restore()\n'
}

lua.luaGenerator.forBlock["window_minimize"] = function () {
    return 'love.window.minimize()\n'
}

lua.luaGenerator.forBlock["window_maximize"] = function () {
    return 'love.window.maximize()\n'
}

lua.luaGenerator.forBlock["window_isvisible"] = function () {
    const code = 'love.window.isVisible()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_isopen"] = function () {
    const code = 'love.window.isOpen()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_isminimized"] = function () {
    const code = 'love.window.isMinimized()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_ismaximized"] = function () {
    const code = 'love.window.isMaximized()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_hasmousefocus"] = function () {
    const code = 'love.window.hasMouseFocus()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["window_getdisplaycount"] = function () {
    const code = 'love.window.getDisplayCount()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["system_vibrate"] = function (block) {
    const valueSeconds = lua.luaGenerator.valueToCode(block, 'seconds', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.system.vibrate( ' + valueSeconds + ' )\n'
}

lua.luaGenerator.forBlock["system_setclipboardtext"] = function (block) {
    const valueText = lua.luaGenerator.valueToCode(block, 'text', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.system.setClipboardText( ' + valueText + ' )\n'
}

lua.luaGenerator.forBlock["system_openurl"] = function (block) {
    const valueUrl = lua.luaGenerator.valueToCode(block, 'url', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.system.openURL( ' + valueUrl + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["system_getprocessorcount"] = function () {
    const code = 'love.system.getProcessorCount()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["system_getos"] = function () {
    const code = 'love.system.getOS()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["system_getclipboardtext"] = function () {
    const code = 'love.system.getClipboardText()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["system_hasbackgroundmusic"] = function () {
    const code = 'love.system.hasBackgroundMusic()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["timer_step"] = function () {
    const code = 'love.timer.step()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["timer_sleep"] = function (block) {
    const valueS = lua.luaGenerator.valueToCode(block, 's', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.timer.sleep( ' + valueS + ' )\n\n'
}

lua.luaGenerator.forBlock["timer_gettime"] = function () {
    const code = 'love.timer.getTime()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["timer_getfps"] = function () {
    const code = 'love.timer.getFPS()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["timer_getdelta"] = function () {
    const code = 'love.timer.getDelta()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["timer_getaveragedelta"] = function () {
    const code = 'love.timer.getAverageDelta()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_triangulate"] = function (block) {
    const valuePolygon = lua.luaGenerator.valueToCode(block, 'polygon', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.math.triangulate( ' + valuePolygon + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_setrandomstate"] = function (block) {
    const valueState = lua.luaGenerator.valueToCode(block, 'state', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.math.setRandomState( ' + valueState + ' )\n'
}

lua.luaGenerator.forBlock["math_setrandomseed"] = function (block) {
    const valueSeed = lua.luaGenerator.valueToCode(block, 'seed', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.math.setRandomSeed( ' + valueSeed + ' )\n'
}

lua.luaGenerator.forBlock["math_randomnormal"] = function (block) {
    const valueStddev = lua.luaGenerator.valueToCode(block, 'stddev', lua.luaGenerator.ORDER_ATOMIC)
    const valueMean = lua.luaGenerator.valueToCode(block, 'mean', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.math.randomNormal( ' + valueStddev + ', ' + valueMean + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_random"] = function (block) {
    const valueMin = lua.luaGenerator.valueToCode(block, 'min', lua.luaGenerator.ORDER_ATOMIC)
    const valueMax = lua.luaGenerator.valueToCode(block, 'max', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.math.random(' + valueMin + ', ' + valueMax + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_noise"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.math.noise( ' + valueX + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_isconvex"] = function (block) {
    const valueVertices = lua.luaGenerator.valueToCode(block, 'vertices', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.math.isConvex( ' + valueVertices + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_getrandomstate"] = function () {
    const code = 'love.math.getRandomState()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_getrandomseed"] = function () {
    const code = 'love.math.getRandomSeed( )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["math_newrandomgenerator"] = function () {
    const code = 'love.math.newRandomGenerator()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_sety"] = function (block) {
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setY( ' + valueY + ' )\n'
}

lua.luaGenerator.forBlock["mouse_setx"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setX( ' + valueX + ' )\n'
}

lua.luaGenerator.forBlock["mouse_setvisible"] = function (block) {
    const valueVisible = lua.luaGenerator.valueToCode(block, 'visible', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setVisible( ' + valueVisible + ' )\n'
}

lua.luaGenerator.forBlock["mouse_setrelativemode"] = function (block) {
    const valueEnable = lua.luaGenerator.valueToCode(block, 'enable', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setRelativeMode( ' + valueEnable + ' )\n'
}

lua.luaGenerator.forBlock["mouse_setposition"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setPosition( ' + valueX + ', ' + valueY + ' )\n'
}

lua.luaGenerator.forBlock["mouse_setgrabbed"] = function (block) {
    const valueGrab = lua.luaGenerator.valueToCode(block, 'grab', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setGrabbed( ' + valueGrab + ' )\n'
}

lua.luaGenerator.forBlock["mouse_setcursor"] = function (block) {
    const valueCursor = lua.luaGenerator.valueToCode(block, 'cursor', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.mouse.setCursor( ' + valueCursor + ' )\n'
}

lua.luaGenerator.forBlock["mouse_newcursor"] = function (block) {
    const valueImagedata = lua.luaGenerator.valueToCode(block, 'imageData', lua.luaGenerator.ORDER_ATOMIC)
    const valueHotx = lua.luaGenerator.valueToCode(block, 'hotx', lua.luaGenerator.ORDER_ATOMIC)
    const valueHoty = lua.luaGenerator.valueToCode(block, 'hoty', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.mouse.newCursor( ' + valueImagedata + ', ' + valueHotx + ', ' + valueHoty + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_isvisible"] = function () {
    const code = 'love.mouse.isVisible()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_isgrabbed"] = function () {
    const code = 'love.mouse.isGrabbed()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_isdown"] = function (block) {
    const valueButton = lua.luaGenerator.valueToCode(block, 'button', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.mouse.isDown( ' + valueButton + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_gety"] = function () {
    const code = 'love.mouse.getY()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_getx"] = function () {
    const code = 'love.mouse.getX()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_getsystemcursor"] = function (block) {
    const valueCtype = lua.luaGenerator.valueToCode(block, 'ctype', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.mouse.getSystemCursor( ' + valueCtype + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_getrelativemode"] = function () {
    const code = 'love.mouse.getRelativeMode()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_getposition"] = function () {
    const code = 'love.mouse.getPosition()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["mouse_getcursor"] = function () {
    const code = 'love.mouse.getCursor()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_setmeter"] = function (block) {
    const valueScale = lua.luaGenerator.valueToCode(block, 'scale', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.physics.setMeter( ' + valueScale + ' )\n'
}

lua.luaGenerator.forBlock["physics_newworld"] = function (block) {
    const valueXg = lua.luaGenerator.valueToCode(block, 'xg', lua.luaGenerator.ORDER_ATOMIC)
    const valueYg = lua.luaGenerator.valueToCode(block, 'yg', lua.luaGenerator.ORDER_ATOMIC)
    const valueSleep = lua.luaGenerator.valueToCode(block, 'sleep', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newWorld( ' + valueXg + ', ' + valueYg + ', ' + valueSleep + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newwheeljoint"] = function (block) {
    const valueBody1 = lua.luaGenerator.valueToCode(block, 'body1', lua.luaGenerator.ORDER_ATOMIC)
    const valueBody2 = lua.luaGenerator.valueToCode(block, 'body2', lua.luaGenerator.ORDER_ATOMIC)
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueAx = lua.luaGenerator.valueToCode(block, 'ax', lua.luaGenerator.ORDER_ATOMIC)
    const valueAy = lua.luaGenerator.valueToCode(block, 'ay', lua.luaGenerator.ORDER_ATOMIC)
    const valueCollideconnected = lua.luaGenerator.valueToCode(block, 'collideConnected', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newWheelJoint( ' + valueBody1 + ', ' + valueBody2 + ', ' + valueX + ', ' + valueY + ', ' + valueAx + ', ' + valueAy + ', ' + valueCollideconnected + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newweldjoint"] = function (block) {
    const valueBody1 = lua.luaGenerator.valueToCode(block, 'body1', lua.luaGenerator.ORDER_ATOMIC)
    const valueBody2 = lua.luaGenerator.valueToCode(block, 'body2', lua.luaGenerator.ORDER_ATOMIC)
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueCollideconnected = lua.luaGenerator.valueToCode(block, 'collideConnected', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newWeldJoint( ' + valueBody1 + ', ' + valueBody2 + ', ' + valueX + ', ' + valueY + ', ' + valueCollideconnected + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newrectangleshape"] = function (block) {
    const valueWidth = lua.luaGenerator.valueToCode(block, 'width', lua.luaGenerator.ORDER_ATOMIC)
    const valueHeight = lua.luaGenerator.valueToCode(block, 'height', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newRectangleShape( ' + valueWidth + ', ' + valueHeight + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newpolygonshape"] = function (block) {
    const valueVertices = lua.luaGenerator.valueToCode(block, 'vertices', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newPolygonShape( ' + valueVertices + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newmousejoint"] = function (block) {
    const valueBody = lua.luaGenerator.valueToCode(block, 'body', lua.luaGenerator.ORDER_ATOMIC)
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newMouseJoint( ' + valueBody + ', ' + valueX + ', ' + valueY + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_getdistance"] = function (block) {
    const valueFixture1 = lua.luaGenerator.valueToCode(block, 'fixture1', lua.luaGenerator.ORDER_ATOMIC)
    const valueFixture2 = lua.luaGenerator.valueToCode(block, 'fixture2', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.getDistance( ' + valueFixture1 + ', ' + valueFixture2 + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_getmeter"] = function () {
    const code = 'love.physics.getMeter()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newbody"] = function (block) {
    const valueWorld = lua.luaGenerator.valueToCode(block, 'world', lua.luaGenerator.ORDER_ATOMIC)
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const dropdownType = block.getFieldValue('type')
    const code = 'love.physics.newBody( ' + valueWorld + ', ' + valueX + ', ' + valueY + ', "' + dropdownType + '" )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newcircleshape"] = function (block) {
    const valueRadius = lua.luaGenerator.valueToCode(block, 'radius', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newCircleShape( ' + valueRadius + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newchainshape"] = function (block) {
    const valueLoop = lua.luaGenerator.valueToCode(block, 'loop', lua.luaGenerator.ORDER_ATOMIC)
    const valuePoints = lua.luaGenerator.valueToCode(block, 'points', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newChainShape( ' + valueLoop + ', ' + valuePoints + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newedgeshape"] = function (block) {
    const valueX1 = lua.luaGenerator.valueToCode(block, 'x1', lua.luaGenerator.ORDER_ATOMIC)
    const valueX2 = lua.luaGenerator.valueToCode(block, 'x2', lua.luaGenerator.ORDER_ATOMIC)
    const valueX3 = lua.luaGenerator.valueToCode(block, 'x3', lua.luaGenerator.ORDER_ATOMIC)
    const valueX4 = lua.luaGenerator.valueToCode(block, 'x4', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newEdgeShape( ' + valueX1 + ', ' + valueX2 + ', ' + valueX3 + ', ' + valueX4 + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["physics_newfixture"] = function (block) {
    const valueBody = lua.luaGenerator.valueToCode(block, 'body', lua.luaGenerator.ORDER_ATOMIC)
    const valueShape = lua.luaGenerator.valueToCode(block, 'shape', lua.luaGenerator.ORDER_ATOMIC)
    const valueDensity = lua.luaGenerator.valueToCode(block, 'density', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.physics.newFixture( ' + valueBody + ', ' + valueShape + ', ' + valueDensity + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_setdistancemodel"] = function (block) {
    const dropdownModel = block.getFieldValue('model')
    return 'love.audio.setDistanceModel( "' + dropdownModel + '" )\n'
}

lua.luaGenerator.forBlock["audio_getdistancemodel"] = function () {
    const code = 'love.audio.getDistanceModel()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_setdopplerscale"] = function (block) {
    const valueScale = lua.luaGenerator.valueToCode(block, 'scale', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.audio.setDopplerScale( ' + valueScale + ' )\n'
}

lua.luaGenerator.forBlock["audio_seteffect"] = function (block) {
    const valueName = lua.luaGenerator.valueToCode(block, 'name', lua.luaGenerator.ORDER_ATOMIC)
    const valueSettings = lua.luaGenerator.valueToCode(block, 'settings', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.audio.setEffect(' + valueName + ', ' + valueSettings + ')\n'
}

lua.luaGenerator.forBlock["audio_setmixwithsystem"] = function (block) {
    const valueMix = lua.luaGenerator.valueToCode(block, 'mix', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.audio.setMixWithSystem( ' + valueMix + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_setorientation"] = function (block) {
    const valueFx = lua.luaGenerator.valueToCode(block, 'fx', lua.luaGenerator.ORDER_ATOMIC)
    const valueFy = lua.luaGenerator.valueToCode(block, 'fy', lua.luaGenerator.ORDER_ATOMIC)
    const valueFz = lua.luaGenerator.valueToCode(block, 'fz', lua.luaGenerator.ORDER_ATOMIC)
    const valueUx = lua.luaGenerator.valueToCode(block, 'ux', lua.luaGenerator.ORDER_ATOMIC)
    const valueUy = lua.luaGenerator.valueToCode(block, 'uy', lua.luaGenerator.ORDER_ATOMIC)
    const valueUz = lua.luaGenerator.valueToCode(block, 'uz', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.audio.setOrientation( ' + valueFx + ', ' + valueFy + ', ' + valueFz + ', ' + valueUx + ', ' + valueUy + ', ' + valueUz + ' )\n'
}

lua.luaGenerator.forBlock["audio_setposition"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueZ = lua.luaGenerator.valueToCode(block, 'z', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.audio.setPosition( ' + valueX + ', ' + valueY + ', ' + valueZ + ' )\n'
}

lua.luaGenerator.forBlock["audio_setvelocity"] = function (block) {
    const valueX = lua.luaGenerator.valueToCode(block, 'x', lua.luaGenerator.ORDER_ATOMIC)
    const valueY = lua.luaGenerator.valueToCode(block, 'y', lua.luaGenerator.ORDER_ATOMIC)
    const valueZ = lua.luaGenerator.valueToCode(block, 'z', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.audio.setVelocity( ' + valueX + ', ' + valueY + ', ' + valueZ + ' )\n'
}

lua.luaGenerator.forBlock["audio_setvolume"] = function (block) {
    const numberVolume = block.getFieldValue('volume')
    return 'love.audio.setVolume( ' + numberVolume + ' )\n'
}

lua.luaGenerator.forBlock["audio_stop"] = function () {
    return 'love.audio.stop()\n'
}

lua.luaGenerator.forBlock["audio_pause"] = function () {
    const code = 'love.audio.pause()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_newsource"] = function (block) {
    const textFilename = block.getFieldValue('filename')
    const dropdownType = block.getFieldValue('type')
    const code = 'love.audio.newSource( ' + textFilename + ', "' + dropdownType + '" )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_iseffectssupported"] = function () {
    const code = 'love.audio.isEffectsSupported()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getvolume"] = function () {
    const code = 'love.audio.getVolume()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getvelocity"] = function () {
    const code = 'love.audio.getVelocity()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getrecordingdevices"] = function () {
    const code = 'love.audio.getRecordingDevices()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getposition"] = function () {
    const code = 'love.audio.getPosition()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getorientation"] = function () {
    const code = 'love.audio.getOrientation()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getmaxsourceeffects"] = function () {
    const code = 'love.audio.getMaxSourceEffects()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getmaxsceneeffects"] = function () {
    const code = 'love.audio.getMaxSceneEffects()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_geteffect"] = function (block) {
    const valueName = lua.luaGenerator.valueToCode(block, 'name', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.audio.getEffect(' + valueName + ')'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getdopplerscale"] = function () {
    const code = 'love.audio.getDopplerScale()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getactivesourcecount"] = function () {
    const code = 'love.audio.getActiveSourceCount()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["audio_getactiveeffects"] = function () {
    const code = 'love.audio.getActiveEffects()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_append"] = function (block) {
    const valueName = lua.luaGenerator.valueToCode(block, 'name', lua.luaGenerator.ORDER_ATOMIC)
    const valueData = lua.luaGenerator.valueToCode(block, 'data', lua.luaGenerator.ORDER_ATOMIC)
    const valueSize = lua.luaGenerator.valueToCode(block, 'size', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.filesystem.append( ' + valueName + ', ' + valueData + ', ' + valueSize + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_aresymlinksenabled"] = function () {
    const code = 'love.filesystem.areSymlinksEnabled()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_createdirectory"] = function (block) {
    const valueName = lua.luaGenerator.valueToCode(block, 'name', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.filesystem.createDirectory( ' + valueName + ' )\n'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getdirectoryitems"] = function (block) {
    const valueName = lua.luaGenerator.valueToCode(block, 'name', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.filesystem.getDirectoryItems( ' + valueName + ' )\n'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getidentity"] = function () {
    const code = 'love.filesystem.getIdentity()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getinfo"] = function (block) {
    const textPath = block.getFieldValue('path')
    const dropdownFiltertype = block.getFieldValue('filtertype')
    const code = 'love.filesystem.getInfo( ' + textPath + ', "' + dropdownFiltertype + '" )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getrequirepath"] = function () {
    const code = 'love.filesystem.getRequirePath()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getrealdirectory"] = function (block) {
    const textFilepath = block.getFieldValue('filepath')
    const code = 'love.filesystem.getRealDirectory( ' + textFilepath + ' )\n'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getsavedirectory"] = function () {
    const code = 'love.filesystem.getSaveDirectory()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getsource"] = function () {
    const code = 'love.filesystem.getSource()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getuserdirectory"] = function () {
    const code = 'love.filesystem.getUserDirectory()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_getworkingdirectory"] = function () {
    const code = 'love.filesystem.getWorkingDirectory()'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_init"] = function (block) {
    const valueAppname = lua.luaGenerator.valueToCode(block, 'appname', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.filesystem.init( ' + valueAppname + ' )\n'
}

lua.luaGenerator.forBlock["filesystem_lines"] = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.lines( ' + textName + ' )\n'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_load"] = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.load( ' + textName + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_mount"] = function (block) {
    const valueArchive = lua.luaGenerator.valueToCode(block, 'archive', lua.luaGenerator.ORDER_ATOMIC)
    const valueMountpoint = lua.luaGenerator.valueToCode(block, 'mountpoint', lua.luaGenerator.ORDER_ATOMIC)
    const valueAppendtopath = lua.luaGenerator.valueToCode(block, 'appendToPath', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.filesystem.mount( ' + valueArchive + ', ' + valueMountpoint + ', ' + valueAppendtopath + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_newfile"] = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.newFile( ' + textName + ' )\n'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_read"] = function (block) {
    const textName = block.getFieldValue('name')
    const valueSize = lua.luaGenerator.valueToCode(block, 'size', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.filesystem.read( ' + textName + ', ' + valueSize + ' )\n'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_remove"] = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.remove( ' + textName + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_setidentity"] = function (block) {
    const textName = block.getFieldValue('name')
    const valueAppendtopath = lua.luaGenerator.valueToCode(block, 'appendToPath', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.filesystem.setIdentity( ' + textName + ', ' + valueAppendtopath + ' )\n'
}

lua.luaGenerator.forBlock["filesystem_setrequirepath"] = function (block) {
    const textPaths = block.getFieldValue('paths')
    return 'love.filesystem.setRequirePath( ' + textPaths + ' )\n'
}

lua.luaGenerator.forBlock["filesystem_setsource"] = function (block) {
    const textPath = block.getFieldValue('path')
    return 'love.filesystem.setSource( ' + textPath + ' )\n'
}

lua.luaGenerator.forBlock["filesystem_setsymlinksenabled"] = function (block) {
    const valueEnable = lua.luaGenerator.valueToCode(block, 'enable', lua.luaGenerator.ORDER_ATOMIC)
    return 'love.filesystem.setSymlinksEnabled( ' + valueEnable + ' )\n'
}

lua.luaGenerator.forBlock["filesystem_unmount"] = function (block) {
    const textArchive = block.getFieldValue('archive')
    const code = 'love.filesystem.unmount( ' + textArchive + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}

lua.luaGenerator.forBlock["filesystem_write"] = function (block) {
    const textName = block.getFieldValue('name')
    const valueData = lua.luaGenerator.valueToCode(block, 'data', lua.luaGenerator.ORDER_ATOMIC)
    const valueSize = lua.luaGenerator.valueToCode(block, 'size', lua.luaGenerator.ORDER_ATOMIC)
    const code = 'love.filesystem.write( ' + textName + ', ' + valueData + ', ' + valueSize + ' )'
    return [code, lua.luaGenerator.ORDER_NONE]
}
