/**
 * Global variable containing definitions for all blocks we use.
 */
let allBlocks = [
  {
    "args0": [
      {
        "name": "COMMENT_CONTEXT",
        "text": "",
        "type": "field_input"
      }
    ],
    "color": 55,
    "helpUrl": "",
    "message0": "--%1",
    "nextStatement": null,
    "previousStatement": null,
    "tooltip": "",
    "type": "comment"
  },
  {
    "type": "shebang",
    "message0": "%1",
    "args0": [
      {
        "name": "shebang_context",
        "text": "#!/usr/local/bin/lua\r",
        "type": "field_input"
      }
    ],
    "nextStatement": true,
    "color": 65,
    "tooltip": "",
    "helpUrl": ""
  },





  {
    "type": "table_remove",
    "message0": "remove from list %1 %2 element %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "table",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "index",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "The table.remove function removes an element from a given position in an array,",
    "helpUrl": "https://www.lua.org/pil/19.2.html"
  },
  {
    "type": "graphics_setnewfont",
    "message0": "set font size %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "size",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Creates and sets a new Font. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setNewFont"
  },
  {
    "type": "for_index_item",
    "message0": "for each %1 %2 in list %3 %4 %5",
    "args0": [
      {
        "type": "field_variable",
        "name": "index",
        "variable": "index"
      },
      {
        "type": "field_variable",
        "name": "item",
        "variable": "item"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "array",
        "check": "Array"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Loop with index and item.",
    "helpUrl": ""
  },
  {
    "type": "love_mousereleased",
    "message0": "mouse released %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "button",
        "variable": "button"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "istouchy",
        "variable": "istouchy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "presses",
        "variable": "presses"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a mouse button is released. ",
    "helpUrl": "https://love2d.org/wiki/love.mousereleased"
  },
  {
    "type": "love_keypressed",
    "message0": "key pressed %1 %2 %3 %4 %5 %6 %7 %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "key",
        "variable": "key"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "scancode",
        "variable": "scancode"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "isrepeat",
        "variable": "isrepeat"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a key is pressed. ",
    "helpUrl": "https://love2d.org/wiki/love.keypressed"
  },
  {
    "type": "love_keyreleased",
    "message0": "key released %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "key",
        "variable": "key"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "scancode",
        "variable": "scancode"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a keyboard key is released. ",
    "helpUrl": "https://love2d.org/wiki/love.keyreleased"
  },
  {
    "type": "love_directorydropped",
    "message0": "directory dropped %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "path",
        "variable": "path"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a directory is dragged and dropped onto the window. ",
    "helpUrl": "https://love2d.org/wiki/love.directorydropped"
  },
  {
    "type": "love_displayrotated",
    "message0": "display rotated %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "index",
        "variable": "index"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "orientation",
        "variable": "orientation"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "  Called when the device display orientation changed.",
    "helpUrl": "https://love2d.org/wiki/love.displayrotated"
  },
  {
    "type": "love_draw",
    "message0": "draw game %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "colour": 230,
    "tooltip": "Callback function used to draw on the screen every frame.",
    "helpUrl": "https://love2d.org/wiki/love.draw"
  },
  {
    "type": "love_errorhandler",
    "message0": "error handler %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "msg",
        "variable": "msg"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "The error handler, used to display error messages.",
    "helpUrl": "https://love2d.org/wiki/love.errorhandler"
  },
  {
    "type": "love_filedropped",
    "message0": "file dropped %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "file",
        "variable": "file"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a file is dragged and dropped onto the window.",
    "helpUrl": "https://love2d.org/wiki/love.filedropped"
  },
  {
    "type": "love_focus",
    "message0": "focus %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "focus",
        "variable": "focus"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when window receives or loses focus. ",
    "helpUrl": "https://love2d.org/wiki/love.focus"
  },
  {
    "type": "love_gamepadaxis",
    "message0": "gamepad axis %1 %2 %3 %4 %5 %6 %7 %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "axis",
        "variable": "axis"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "value",
        "variable": "value"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a Joystick's virtual gamepad axis is moved. ",
    "helpUrl": "https://love2d.org/wiki/love.gamepadaxis"
  },
  {
    "type": "love_gamepadpressed",
    "message0": "gamepad pressed %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "button",
        "variable": "button"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a Joystick's virtual gamepad button is pressed. ",
    "helpUrl": "https://love2d.org/wiki/love.gamepadpressed"
  },
  {
    "type": "love_gamepadreleased",
    "message0": "gamepad released %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "button",
        "variable": "button"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a Joystick's virtual gamepad button is released. ",
    "helpUrl": "https://love2d.org/wiki/love.gamepadreleased"
  },
  {
    "type": "love_joystickadded",
    "message0": "joystick added %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a Joystick is connected. ",
    "helpUrl": "https://love2d.org/wiki/love.joystickadded"
  },
  {
    "type": "love_joystickaxis",
    "message0": "joystick axis %1 %2 %3 %4 %5 %6 %7 %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "axis",
        "variable": "axis"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "value",
        "variable": "value"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a joystick axis moves. ",
    "helpUrl": "https://love2d.org/wiki/love.joystickaxis"
  },
  {
    "type": "love_joystickhat",
    "message0": "joystick hat %1 %2 %3 %4 %5 %6 %7 %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "hat",
        "variable": "hat"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "direction",
        "variable": "direction"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a joystick hat direction changes. ",
    "helpUrl": "https://love2d.org/wiki/love.joystickhat"
  },
  {
    "type": "love_joystickpressed",
    "message0": "joystick pressed %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "button",
        "variable": "button"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a joystick button is pressed. ",
    "helpUrl": "https://love2d.org/wiki/love.joystickpressed"
  },
  {
    "type": "love_joystickreleased",
    "message0": "joystick released %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "button",
        "variable": "button"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a joystick button is released. ",
    "helpUrl": "https://love2d.org/wiki/love.joystickreleased"
  },
  {
    "type": "love_joystickremoved",
    "message0": "joystick removed %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "joystick",
        "variable": "joystick"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when a Joystick is disconnected. ",
    "helpUrl": "https://love2d.org/wiki/love.joystickremoved"
  },
  {
    "type": "love_load",
    "message0": "load game %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "This function is called exactly once at the beginning of the game. ",
    "helpUrl": "https://love2d.org/wiki/love.load"
  },
  {
    "type": "love_lowmemory",
    "message0": "low memory %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "colour": 230,
    "tooltip": "Callback function triggered when the system is running out of memory on mobile devices. ",
    "helpUrl": "https://love2d.org/wiki/love.lowmemory"
  },
  {
    "type": "love_mousefocus",
    "message0": "mouse focus %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "focus",
        "variable": "focus"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when window receives or loses mouse focus. ",
    "helpUrl": "https://love2d.org/wiki/love.mousefocus"
  },
  {
    "type": "love_mousemoved",
    "message0": "mouse moved %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dx",
        "variable": "dx"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dy",
        "variable": "dy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "istouch",
        "variable": "istouch"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when the mouse is moved. ",
    "helpUrl": "https://love2d.org/wiki/love.mousemoved"
  },
  {
    "type": "love_mousepressed",
    "message0": "mouse pressed %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "button",
        "variable": "button"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "istouch",
        "variable": "istouch"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "presses",
        "variable": "presses"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a mouse button is pressed. ",
    "helpUrl": "https://love2d.org/wiki/love.mousepressed"
  },
  {
    "type": "love_quit",
    "message0": "quit game %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "colour": 230,
    "tooltip": "Callback function triggered when the game is closed. ",
    "helpUrl": "https://love2d.org/wiki/love.quit"
  },
  {
    "type": "love_resize",
    "message0": "resize %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "width",
        "variable": "width"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "height",
        "variable": "height"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when the window is resized.",
    "helpUrl": "https://love2d.org/wiki/love.resize"
  },
  {
    "type": "love_run",
    "message0": "run game %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "colour": 230,
    "tooltip": "The main function, containing the main loop. A sensible default is used when left out. ",
    "helpUrl": "https://love2d.org/wiki/love.run"
  },
  {
    "type": "love_textedited",
    "message0": "text edited %1 %2 %3 %4 %5 %6 %7 %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "text",
        "variable": "text"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "start",
        "variable": "start"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "length",
        "variable": "length"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when the candidate text for an IME (Input Method Editor) has changed.",
    "helpUrl": "https://love2d.org/wiki/love.textedited"
  },
  {
    "type": "love_textinput",
    "message0": "text input %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "text",
        "variable": "text"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Called when text has been entered by the user. ",
    "helpUrl": "https://love2d.org/wiki/love.textinput"
  },
  {
    "type": "love_threaderror",
    "message0": "thread error %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "thread",
        "variable": "thread"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "errorstr",
        "variable": "errorstr"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a Thread encounters an error. ",
    "helpUrl": "https://love2d.org/wiki/love.threaderror"
  },
  {
    "type": "love_touchmoved",
    "message0": "touch moved %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "id",
        "variable": "id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dx",
        "variable": "dx"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dy",
        "variable": "dy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "pressure",
        "variable": "pressure"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when a touch press moves inside the touch screen. ",
    "helpUrl": "https://love2d.org/wiki/love.touchmoved"
  },
  {
    "type": "love_touchpressed",
    "message0": "touch pressed %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "id",
        "variable": "id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dx",
        "variable": "dx"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dy",
        "variable": "dy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "pressure",
        "variable": "pressure"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when the touch screen is touched. ",
    "helpUrl": "https://love2d.org/wiki/love.touchpressed"
  },
  {
    "type": "love_touchreleased",
    "message0": "touch released %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "id",
        "variable": "id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dx",
        "variable": "dx"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dy",
        "variable": "dy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "pressure",
        "variable": "pressure"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when the touch screen stops being touched. ",
    "helpUrl": "https://love2d.org/wiki/love.touchreleased"
  },
  {
    "type": "love_update",
    "message0": "update game %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "dt",
        "variable": "dt"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function used to update the state of the game every frame. ",
    "helpUrl": "https://love2d.org/wiki/love.update"
  },
  {
    "type": "love_visible",
    "message0": "visible %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "visible",
        "variable": "visible"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when window is minimized/hidden or unminimized by the user. ",
    "helpUrl": "https://love2d.org/wiki/love.visible"
  },
  {
    "type": "love_wheelmoved",
    "message0": "wheel moved %1 %2 %3 %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "x",
        "variable": "x"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "y",
        "variable": "y"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "input"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "Callback function triggered when the mouse wheel is moved. ",
    "helpUrl": "https://love2d.org/wiki/love.wheelmoved"
  },
  {
    "type": "graphics_stencil",
    "message0": "stencil %1 function name %2 %3 action %4 %5 value %6 %7 keepvalues %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "stencilfunction",
        "text": "default"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "action",
        "options": [
          [
            "replace",
            "replace"
          ],
          [
            "increment",
            "increment"
          ],
          [
            "decrement",
            "decrement"
          ],
          [
            "incrementwrap",
            "incrementwrap"
          ],
          [
            "decrementwrap",
            "decrementwrap"
          ],
          [
            "invert",
            "invert"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "value",
        "value": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "keepvalues",
        "check": "Boolean"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws geometry as a stencil. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.stencil"
  },
  {
    "type": "graphics_rectangle",
    "message0": "rectangle %1 mode %2 %3 x %4 y %5 width %6 height %7 rx %8 ry %9 segments %10",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            "fill",
            "fill"
          ],
          [
            "line",
            "line"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "height",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "rx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ry",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "segments",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws a rectangle. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.rectangle"
  },
  {
    "type": "graphics_printf",
    "message0": "print formated text %1 x %2 %3 y %4 %5 limit %6 %7 Align Mode %8 %9 r %10 %11 sx %12 %13 sy %14 %15 ox %16 %17 oy %18 %19 kx %20 %21 ky %22",
    "args0": [
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "field_number",
        "name": "x",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "y",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "limit",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "AlignMode",
        "options": [
          [
            "center",
            "center"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ],
          [
            "justify",
            "justify"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "r",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "sx",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "sy",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ox",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "oy",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "kx",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ky",
        "value": 0
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws formatted text, with word wrap and alignment. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.printf"
  },
  {
    "type": "graphics_print",
    "message0": "print text %1 text %2 x %3 y %4 r %5 sx %6 sy %7 ox %8 oy %9 kx %10 ky %11",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "r",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "sx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "sy",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ox",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "oy",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "kx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ky",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws text on screen.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.print"
  },
  {
    "type": "graphics_present",
    "message0": "Displays the results of drawing",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Displays the results of drawing operations on the screen. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.present"
  },
  {
    "type": "graphics_polygon",
    "message0": "draw polygon %1 mode %2 %3 array of vertices %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "DrawMode",
        "options": [
          [
            "fill",
            "fill"
          ],
          [
            "line",
            "line"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "vertices",
        "check": "Array"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draw a polygon. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.polygon"
  },
  {
    "type": "graphics_points",
    "message0": "draw points %1 array of points %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "points",
        "check": "Array"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws one or more points. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.points"
  },
  {
    "type": "graphics_line",
    "message0": "draws lines  %1 array of points %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "points",
        "check": "Array"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws lines between points. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.line"
  },
  {
    "type": "graphics_flushbatch",
    "message0": "render pending batched draws",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Immediately renders any pending automatically batched draws. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.flushBatch"
  },
  {
    "type": "graphics_ellipse",
    "message0": "draw ellipse %1 draw mode %2 %3 x %4 %5 y %6 %7 radiusx %8 %9 radiusy %10 %11 segments %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "DrawMode",
        "options": [
          [
            "fill",
            "fill"
          ],
          [
            "line",
            "line"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "x",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "y",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "radiusx",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "radiusy",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "segments",
        "value": 0
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws an ellipse. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.ellipse"
  },
  {
    "type": "graphics_drawlayer",
    "message0": "draw layer %1 texture %2 layer index %3 %4 x %5 %6 y %7 %8 r %9 %10 sx %11 %12 sy %13 %14 ox %15 %16 oy %17 %18 kx %19 %20 ky %21",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "texture",
        "check": "Array"
      },
      {
        "type": "field_number",
        "name": "layerindex",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "x",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "y",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "r",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "sx",
        "value": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "sy",
        "value": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ox",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "oy",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "kx",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ky",
        "value": 0
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws a layer of an Array Texture. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.drawLayer"
  },
  {
    "type": "graphics_draw",
    "message0": "draw %1 drawable %2 x %3 %4 y %5 %6 r %7 %8 sx %9 %10 sy %11 %12 ox %13 %14 oy %15 %16 kx %17 %18 ky %19",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "drawable"
      },
      {
        "type": "field_number",
        "name": "x",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "y",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "r",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "sx",
        "value": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "sy",
        "value": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ox",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "oy",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "kx",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ky",
        "value": 0
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws a Drawable object on the screen with rotation",
    "helpUrl": "https://love2d.org/wiki/love.graphics.draw"
  },
  {
    "type": "graphics_discard",
    "message0": "discard %1 color %2 stencil %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "discardcolor",
        "check": "Boolean"
      },
      {
        "type": "input_value",
        "name": "discardstencil",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "graphics_clear",
    "message0": "clear graphics",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Clears the screen to the background color",
    "helpUrl": "https://love2d.org/wiki/love.graphics.clear"
  },
  {
    "type": "graphics_circle",
    "message0": "draw circle %1 mode %2 %3 x %4 y %5 radius %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            "fill",
            "fill"
          ],
          [
            "line",
            "line"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "radius",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws a circle. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.circle"
  },
  {
    "type": "graphics_arc",
    "message0": "draw arc %1 mode %2 %3 x %4 %5 y %6 %7 radius %8 %9 angle1 %10 %11 angle2 %12 %13 segments %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "drawmode",
        "options": [
          [
            "fill",
            "fill"
          ],
          [
            "line",
            "line"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "x",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "y",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "radius",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_angle",
        "name": "angle1",
        "angle": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_angle",
        "name": "angle2",
        "angle": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "segments",
        "value": 10
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Draws a arc.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.arc"
  },
  {
    "type": "graphics_translate",
    "message0": "translate coordinate system in 2d %1 dx %2 dy %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "dx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "dy",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Translates the coordinate system in two dimensions. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.translate"
  },
  {
    "type": "graphics_transformpoint",
    "message0": "transform point %1 globalX %2 globalY %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "globalX",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "globalY",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 290,
    "tooltip": "Converts the given 2D position from global coordinates into screen-space. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.transformPoint"
  },
  {
    "type": "graphics_shear",
    "message0": "shear %1 kx %2 ky %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "kx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ky",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Shears the coordinate system. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.shear"
  },
  {
    "type": "graphics_scale",
    "message0": "scale %1 sx %2 sy %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "sx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "sy",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Scales the coordinate system in two dimensions. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.scale"
  },
  {
    "type": "graphics_rotate",
    "message0": "rotate coordinate system %1 angle %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "angle",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Rotates the coordinate system in two dimensions. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.rotate"
  },
  {
    "type": "graphics_push",
    "message0": "push coordinate transformation to stack",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Copies and pushes the current coordinate transformation to the transformation stack. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.push"
  },
  {
    "type": "graphics_pop",
    "message0": "pop current coordinate transformation from stack",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Pops the current coordinate transformation from the transformation stack. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.pop"
  },
  {
    "type": "graphics_origin",
    "message0": "reset current coordinate transformation",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Resets the current coordinate transformation. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.origin"
  },
  {
    "type": "graphics_inversetransformpoint",
    "message0": "inverse transform point %1 screenX %2 screenY %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "screenX",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "screenY",
        "check": "Number"
      }
    ],
    "inputsInline": false,
    "output": "Array",
    "colour": 290,
    "tooltip": "Converts the given 2D position from screen-space into global coordinates. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.inverseTransformPoint"
  },
  {
    "type": "graphics_validateshader",
    "message0": "validate shader %1 gles %2 code %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "gles",
        "check": "Boolean"
      },
      {
        "type": "input_value",
        "name": "code",
        "check": "String"
      }
    ],
    "output": "Array",
    "colour": 290,
    "tooltip": "Validates shader code. Check if specified shader code does not contain any errors. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.validateShader"
  },
  {
    "type": "graphics_newimage",
    "message0": "set new image %1 filename %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "filename",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "image",
    "colour": 290,
    "tooltip": "Creates a new Image from a filepath",
    "helpUrl": "https://love2d.org/wiki/love.graphics.newImage"
  },
  {
    "type": "graphics_getwidth",
    "message0": "get window width",
    "inputsInline": true,
    "output": "Number",
    "colour": 290,
    "tooltip": "Gets the width in pixels of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getWidth"
  },
  {
    "type": "graphics_getpixelwidth",
    "message0": "get width in pixels",
    "inputsInline": true,
    "output": "Number",
    "colour": 290,
    "tooltip": "Gets the width in pixels of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getPixelWidth"
  },
  {
    "type": "graphics_getpixelheight",
    "message0": "get height in pixels",
    "output": "Number",
    "colour": 290,
    "tooltip": "Gets the height in pixels of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getPixelHeight"
  },
  {
    "type": "graphics_getpixeldimensions",
    "message0": "get pixel dimensions",
    "output": "Array",
    "colour": 290,
    "tooltip": "Gets the width and height in pixels of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getPixelDimensions"
  },
  {
    "type": "graphics_getheight",
    "message0": "get window height",
    "output": "Number",
    "colour": 290,
    "tooltip": " Gets the height in pixels of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getHeight"
  },
  {
    "type": "graphics_getdimensions",
    "message0": "get window dimensions",
    "output": "Array",
    "colour": 290,
    "tooltip": "Gets the width and height in pixels of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getDimensions"
  },
  {
    "type": "graphics_getdpiscale",
    "message0": "get DPI scale",
    "inputsInline": true,
    "output": "Number",
    "colour": 290,
    "tooltip": "Gets the DPI scale factor of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getDPIScale"
  },
  {
    "type": "graphics_getbackgroundcolor",
    "message0": "get background color",
    "output": "Array",
    "colour": 290,
    "tooltip": "Gets the current background color. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getBackgroundColor"
  },
  {
    "type": "graphics_getcolor",
    "message0": "get current color",
    "output": "Array",
    "colour": 290,
    "tooltip": "Gets the current color. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getColor"
  },
  {
    "type": "graphics_isgammacorrect",
    "message0": "is gamma correct",
    "output": "Boolean",
    "colour": 290,
    "tooltip": "Gets whether gamma-correct rendering is supported and enabled.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.isGammaCorrect"
  },
  {
    "type": "graphics_isactive",
    "message0": "is graphics module active",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 290,
    "tooltip": "Gets whether the graphics module is able to be used.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.isActive"
  },
  {
    "type": "graphics_reset",
    "message0": "reset graphics settings",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Resets the current graphics settings. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.reset"
  },
  {
    "type": "graphics_iswireframe",
    "message0": "is wireframe mode used",
    "output": "Boolean",
    "colour": 290,
    "tooltip": "Gets whether wireframe mode is used when drawing. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.isWireframe"
  },
  {
    "type": "graphics_setbackgroundcolor",
    "message0": "set background color %1 red %2 %3 green %4 %5 blue %6 %7 alpha %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "red",
        "value": 0,
        "min": 0,
        "max": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "green",
        "value": 0,
        "min": 0,
        "max": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "blue",
        "value": 0,
        "min": 0,
        "max": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "alpha",
        "value": 0,
        "min": 0,
        "max": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets the background color. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setBackgroundColor"
  },
  {
    "type": "graphics_setcolor",
    "message0": "set color %1 red %2 %3 green %4 %5 blue %6 %7 alpha %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "red",
        "value": 0,
        "min": 0,
        "max": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "green",
        "value": 0,
        "min": 0,
        "max": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "blue",
        "value": 0,
        "min": 0,
        "max": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "alpha",
        "value": 0,
        "min": 0,
        "max": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets the color used for drawing.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setColor"
  },
  {
    "type": "graphics_setwireframe",
    "message0": "enable wireframe %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "enable",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets whether wireframe lines will be used when drawing. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setWireframe"
  },
  {
    "type": "graphics_setscissor",
    "message0": "limit drawing area %1 x %2 y %3 width %4 height %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "height",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets or disables scissor. The scissor limits the drawing area to a specified rectangle. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setScissor"
  },
  {
    "type": "graphics_getpointsize",
    "message0": "get point size",
    "output": "Number",
    "colour": 290,
    "tooltip": "Gets the point size.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getPointSize"
  },
  {
    "type": "graphics_setpointsize",
    "message0": "set point size %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "size",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets the point size. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setPointSize"
  },
  {
    "type": "graphics_getlinewidth",
    "message0": "get line width",
    "output": "Number",
    "colour": 290,
    "tooltip": "Gets the current line width. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.getLineWidth"
  },
  {
    "type": "graphics_setlinewidth",
    "message0": "set line width %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets the line width. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setLineWidth"
  },
  {
    "type": "graphics_setlinestyle",
    "message0": "set line style %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "style",
        "options": [
          [
            "rough",
            "rough"
          ],
          [
            "smooth",
            "smooth"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets the line style. ",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setLineStyle"
  },
  {
    "type": "graphics_setlinejoin",
    "message0": "set line join %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "join",
        "options": [
          [
            "miter",
            "miter"
          ],
          [
            "none",
            "none"
          ],
          [
            "bevel",
            "bevel"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Sets the line join style.",
    "helpUrl": "https://love2d.org/wiki/love.graphics.setLineJoin"
  },
  {
    "type": "keyboard_settextinput",
    "message0": "enable text input %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "enable",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "Enables or disables text input events. It is enabled by default on Windows, Mac, and Linux, and disabled by default on iOS and Android. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.setTextInput"
  },
  {
    "type": "keyboard_setkeyrepeat",
    "message0": "enable key repeat %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "enable",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "Enables or disables key repeat for love.keypressed. It is disabled by default. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.setKeyRepeat"
  },
  {
    "type": "keyboard_isscancodedown",
    "message0": "is scancode down %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "scancode",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 30,
    "tooltip": "Checks whether the specified Scancodes are pressed. Not to be confused with love.keypressed or love.keyreleased. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.isScancodeDown"
  },
  {
    "type": "keyboard_isdown",
    "message0": "is key down %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "key",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 30,
    "tooltip": "Checks whether a certain key is down. Not to be confused with love.keypressed or love.keyreleased. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.isDown"
  },
  {
    "type": "keyboard_hastextinput",
    "message0": "is text input enabled",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 30,
    "tooltip": "Gets whether text input events are enabled. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.hasTextInput"
  },
  {
    "type": "keyboard_hasscreenkeyboard",
    "message0": "has screen keyboard",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 30,
    "tooltip": "Gets whether screen keyboard is supported. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.hasScreenKeyboard"
  },
  {
    "type": "keyboard_haskeyrepeat",
    "message0": "is key repeat enabled",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 30,
    "tooltip": "Gets whether key repeat is enabled. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.hasKeyRepeat"
  },
  {
    "type": "keyboard_getscancodefromkey",
    "message0": "get scancode from key %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "key",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 30,
    "tooltip": "Gets the hardware scancode corresponding to the given key. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.getScancodeFromKey"
  },
  {
    "type": "keyboard_getkeyfromscancode",
    "message0": "get key from scancode %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "scancode",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 30,
    "tooltip": "Gets the key corresponding to the given hardware scancode. ",
    "helpUrl": "https://love2d.org/wiki/love.keyboard.getKeyFromScancode"
  },
  {
    "type": "touch_gettouches",
    "message0": "get touches",
    "output": "Array",
    "colour": 60,
    "tooltip": "Gets a list of all active touch-presses. ",
    "helpUrl": "https://love2d.org/wiki/love.touch.getTouches"
  },
  {
    "type": "touch_getpressure",
    "message0": "get touch pressure %1 id %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "id"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 60,
    "tooltip": "Gets the current pressure of the specified touch-press. ",
    "helpUrl": "https://love2d.org/wiki/love.touch.getPressure"
  },
  {
    "type": "touch_getposition",
    "message0": "get touch position %1 id %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "id"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 60,
    "tooltip": "Gets the current position of the specified touch-press, in pixels. ",
    "helpUrl": "https://love2d.org/wiki/love.touch.getPosition"
  },
  {
    "type": "window_close",
    "message0": "window close",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Closes the window. It can be reopened with love.window.setMode. ",
    "helpUrl": "https://love2d.org/wiki/love.window.close"
  },
  {
    "type": "window_getdpiscale",
    "message0": "get DPI Scale",
    "output": "Number",
    "colour": 90,
    "tooltip": "Gets the DPI scale factor associated with the window. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getDPIScale"
  },
  {
    "type": "window_getfullscreen",
    "message0": "get fullscreen",
    "output": "Array",
    "colour": 90,
    "tooltip": "Gets whether the window is fullscreen. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getFullscreen"
  },
  {
    "type": "window_getdisplayname",
    "message0": "get display name by %1 index %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "displayindex",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 90,
    "tooltip": "Gets the name of a display. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getDisplayName"
  },
  {
    "type": "window_getdisplayorientation",
    "message0": "get display orientation %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "displayindex",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 90,
    "tooltip": "Gets current device display orientation. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getDisplayOrientation"
  },
  {
    "type": "window_hasfocus",
    "message0": "window has focus",
    "output": "Boolean",
    "colour": 90,
    "tooltip": "Checks if the game window has keyboard focus. ",
    "helpUrl": "https://love2d.org/wiki/love.window.hasFocus"
  },
  {
    "type": "window_gettitle",
    "message0": "get window title",
    "output": "String",
    "colour": 90,
    "tooltip": " Gets the window title. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getTitle"
  },
  {
    "type": "window_getposition",
    "message0": "get window position",
    "inputsInline": true,
    "output": "Array",
    "colour": 90,
    "tooltip": "Gets the position of the window on the screen. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getPosition"
  },
  {
    "type": "window_settitle",
    "message0": "set window title %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": " Sets the window title. ",
    "helpUrl": "https://love2d.org/wiki/love.window.setTitle"
  },
  {
    "type": "window_setposition",
    "message0": "window set position %1 x %2 y %3 display index %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "displayindex",
        "value": 1,
        "min": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Sets the position of the window on the screen. ",
    "helpUrl": "https://love2d.org/wiki/love.window.setPosition"
  },
  {
    "type": "window_setmode",
    "message0": "window set mode %1 width %2 height %3 flags %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "height",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "flags",
        "check": "Array"
      }
    ],
    "output": "Boolean",
    "colour": 90,
    "tooltip": " Sets the display mode and properties of the window. ",
    "helpUrl": "https://love2d.org/wiki/love.window.setMode"
  },
  {
    "type": "window_setfullscreen",
    "message0": "set window fullscreen %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "fullscreen",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 90,
    "tooltip": "Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected. ",
    "helpUrl": "https://love2d.org/wiki/love.window.setFullscreen"
  },
  {
    "type": "window_restore",
    "message0": "window restore",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Restores the size and position of the window if it was minimized or maximized. ",
    "helpUrl": "https://love2d.org/wiki/love.window.restore"
  },
  {
    "type": "window_minimize",
    "message0": "window minimize",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Minimizes the window to the system's task bar / dock. ",
    "helpUrl": "https://love2d.org/wiki/love.window.minimize"
  },
  {
    "type": "window_maximize",
    "message0": "window maximaze",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Makes the window as large as possible. ",
    "helpUrl": "https://love2d.org/wiki/love.window.maximize"
  },
  {
    "type": "window_isvisible",
    "message0": "is window visible",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 90,
    "tooltip": "Checks if the game window is visible. ",
    "helpUrl": "https://love2d.org/wiki/love.window.isVisible"
  },
  {
    "type": "window_isopen",
    "message0": "is window open",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 90,
    "tooltip": " Checks if the window is open. ",
    "helpUrl": "https://love2d.org/wiki/love.window.isOpen"
  },
  {
    "type": "window_isminimized",
    "message0": "is window minimized",
    "output": "Boolean",
    "colour": 90,
    "tooltip": "Gets whether the Window is currently minimized. ",
    "helpUrl": "https://love2d.org/wiki/love.window.isMinimized"
  },
  {
    "type": "window_ismaximized",
    "message0": "is window maximized",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 90,
    "tooltip": "Gets whether the Window is currently maximized. ",
    "helpUrl": "https://love2d.org/wiki/love.window.isMaximized"
  },
  {
    "type": "window_hasmousefocus",
    "message0": "window has mouse focus",
    "output": "Boolean",
    "colour": 90,
    "tooltip": "Checks if the game window has mouse focus. ",
    "helpUrl": "https://love2d.org/wiki/love.window.hasMouseFocus"
  },
  {
    "type": "window_getdisplaycount",
    "message0": "get display count",
    "inputsInline": true,
    "output": "Number",
    "colour": 90,
    "tooltip": "Gets the number of connected monitors. ",
    "helpUrl": "https://love2d.org/wiki/love.window.getDisplayCount"
  },
  {
    "type": "system_vibrate",
    "message0": "system vibrate %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "seconds",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Causes the device to vibrate, if possible. Currently this will only work on Android and iOS devices that have a built-in vibration motor. ",
    "helpUrl": "https://love2d.org/wiki/love.system.vibrate"
  },
  {
    "type": "system_setclipboardtext",
    "message0": "set clipboard text %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Puts text in the clipboard. ",
    "helpUrl": "https://love2d.org/wiki/love.system.setClipboardText"
  },
  {
    "type": "system_openurl",
    "message0": "open URL %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "url",
        "check": "String"
      }
    ],
    "output": "Boolean",
    "colour": 120,
    "tooltip": "Opens a URL with the user's web or file browser. ",
    "helpUrl": "https://love2d.org/wiki/love.system.openURL"
  },
  {
    "type": "system_getprocessorcount",
    "message0": "get processor count",
    "output": "Number",
    "colour": 120,
    "tooltip": "Gets the amount of logical processors in the system. ",
    "helpUrl": "https://love2d.org/wiki/love.system.getProcessorCount"
  },
  {
    "type": "system_getos",
    "message0": "get system OS",
    "output": "String",
    "colour": 120,
    "tooltip": "Gets the current operating system.",
    "helpUrl": "https://love2d.org/wiki/love.system.getOS"
  },
  {
    "type": "system_getclipboardtext",
    "message0": "get clipboard text",
    "output": "String",
    "colour": 120,
    "tooltip": "Gets text from the clipboard. ",
    "helpUrl": "https://love2d.org/wiki/love.system.getClipboardText"
  },
  {
    "type": "system_hasbackgroundmusic",
    "message0": "has background music",
    "output": "Boolean",
    "colour": 120,
    "tooltip": "Gets whether another application on the system is playing music in the background. ",
    "helpUrl": "https://love2d.org/wiki/love.system.hasBackgroundMusic"
  },
  {
    "type": "timer_step",
    "message0": " time between two frames",
    "output": "Number",
    "colour": 150,
    "tooltip": "Measures the time between two frames. ",
    "helpUrl": "https://love2d.org/wiki/love.timer.step"
  },
  {
    "type": "timer_sleep",
    "message0": "pause current thread %1 seconds %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "s",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 150,
    "tooltip": "Pauses the current thread for the specified amount of time. ",
    "helpUrl": "https://love2d.org/wiki/love.timer.sleep"
  },
  {
    "type": "timer_gettime",
    "message0": "get time",
    "output": "Number",
    "colour": 150,
    "tooltip": "Returns the value of a precise timer with an unspecified starting time. ",
    "helpUrl": "https://love2d.org/wiki/love.timer.getTime"
  },
  {
    "type": "timer_getfps",
    "message0": "get FPS",
    "output": "Number",
    "colour": 150,
    "tooltip": "Returns the current number of frames per second. ",
    "helpUrl": "https://love2d.org/wiki/love.timer.getFPS"
  },
  {
    "type": "timer_getdelta",
    "message0": "get delta",
    "output": "Number",
    "colour": 150,
    "tooltip": "Returns the time between the last two frames. ",
    "helpUrl": "https://love2d.org/wiki/love.timer.getDelta"
  },
  {
    "type": "timer_getaveragedelta",
    "message0": "get average delta",
    "output": "Number",
    "colour": 150,
    "tooltip": "Returns the average delta time (seconds per frame) over the last second. ",
    "helpUrl": "https://love2d.org/wiki/love.timer.getAverageDelta"
  },
  {
    "type": "math_triangulate",
    "message0": "decompose polygon into triangles %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "polygon",
        "check": "Array"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 180,
    "tooltip": "Decomposes a simple convex or concave polygon into triangles. ",
    "helpUrl": "https://love2d.org/wiki/love.math.triangulate"
  },
  {
    "type": "math_setrandomstate",
    "message0": "set random state %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "state",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "Sets the current state of the random number generator.",
    "helpUrl": "https://love2d.org/wiki/love.math.setRandomState"
  },
  {
    "type": "math_setrandomseed",
    "message0": "set random seed %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "seed",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "Sets the seed of the random number generator using the specified integer number. ",
    "helpUrl": "https://love2d.org/wiki/love.math.setRandomSeed"
  },
  {
    "type": "math_randomnormal",
    "message0": "rendom normal %1 stddev %2 mean %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "stddev",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "mean",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "Get a normally distributed pseudo random number. ",
    "helpUrl": "https://love2d.org/wiki/love.math.randomNormal"
  },
  {
    "type": "math_random",
    "message0": "random number %1 min value %2 max value %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "min",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "max",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "Generates a pseudo-random number in a platform independent manner.",
    "helpUrl": "https://love2d.org/wiki/love.math.random"
  },
  {
    "type": "math_noise",
    "message0": "generate noise %1 x %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 180,
    "tooltip": "Generates a Simplex or Perlin noise value in 1-4 dimensions. ",
    "helpUrl": "https://love2d.org/wiki/love.math.noise"
  },
  {
    "type": "math_isconvex",
    "message0": "is convex %1 vertices %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "vertices",
        "check": "Array"
      }
    ],
    "output": "Boolean",
    "colour": 180,
    "tooltip": "Checks whether a polygon is convex. ",
    "helpUrl": "https://love2d.org/wiki/love.math.isConvex"
  },
  {
    "type": "math_getrandomstate",
    "message0": "get random state",
    "output": "String",
    "colour": 180,
    "tooltip": "Gets the current state of the random number generator. ",
    "helpUrl": "https://love2d.org/wiki/love.math.getRandomState"
  },
  {
    "type": "math_getrandomseed",
    "message0": "get random seed",
    "output": "Array",
    "colour": 180,
    "tooltip": "Gets the seed of the random number generator. ",
    "helpUrl": "https://love2d.org/wiki/love.math.getRandomSeed"
  },
  {
    "type": "math_newrandomgenerator",
    "message0": "new random generator",
    "output": null,
    "colour": 180,
    "tooltip": "Creates a new RandomGenerator object which is completely independent of other RandomGenerator objects and random functions. ",
    "helpUrl": "https://love2d.org/wiki/love.math.newRandomGenerator"
  },
  {
    "type": "mouse_sety",
    "message0": "mouse set  %1 y %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Sets the current Y position of the mouse. Non-integer values are floored. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setY"
  },
  {
    "type": "mouse_setx",
    "message0": "mouse set x %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Sets the current X position of the mouse. Non-integer values are floored. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setX"
  },
  {
    "type": "mouse_setvisible",
    "message0": "mouse set visible %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "visible",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Sets the current visibility of the cursor. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setVisible"
  },
  {
    "type": "mouse_setrelativemode",
    "message0": "mouse set relative mode %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "enable",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Sets whether relative mode is enabled for the mouse. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setRelativeMode"
  },
  {
    "type": "mouse_setposition",
    "message0": "mouse set position %1 x %2 y %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Sets the current position of the mouse. Non-integer values are floored. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setPosition"
  },
  {
    "type": "mouse_setgrabbed",
    "message0": "mouse set grab %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "grab",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Grabs the mouse and confines it to the window. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setGrabbed"
  },
  {
    "type": "mouse_setcursor",
    "message0": "set mouse cursor %1 cursor %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "cursor"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Sets the current mouse cursor. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.setCursor"
  },
  {
    "type": "mouse_newcursor",
    "message0": "create cursor %1 image %2 hotx %3 hoty %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "imageData"
      },
      {
        "type": "input_value",
        "name": "hotx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "hoty",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 210,
    "tooltip": "Creates a new hardware Cursor object from an image file or ImageData. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.newCursor"
  },
  {
    "type": "mouse_isvisible",
    "message0": "is cursor visible",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Checks if the cursor is visible. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.isVisible"
  },
  {
    "type": "mouse_isgrabbed",
    "message0": "is mouse grabbed",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Checks if the mouse is grabbed. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.isGrabbed"
  },
  {
    "type": "mouse_isdown",
    "message0": "is mouse button down %1 button %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "button",
        "check": "Number"
      }
    ],
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Checks whether a certain mouse button is down. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.isDown"
  },
  {
    "type": "mouse_gety",
    "message0": "get mouse y position",
    "inputsInline": true,
    "output": "Number",
    "colour": 210,
    "tooltip": "Returns the current y-position of the mouse. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.getY"
  },
  {
    "type": "mouse_getx",
    "message0": "get mouse x position",
    "inputsInline": true,
    "output": "Number",
    "colour": 210,
    "tooltip": "Returns the current x-position of the mouse. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.getX"
  },
  {
    "type": "mouse_getsystemcursor",
    "message0": "get system cursor %1 Cursor Type %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "Cursor Type"
      }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 210,
    "tooltip": "Gets a Cursor object representing a system-native hardware cursor. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.getSystemCursor"
  },
  {
    "type": "mouse_getrelativemode",
    "message0": "is relative mode enabled",
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Gets whether relative mode is enabled for the mouse. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.getRelativeMode"
  },
  {
    "type": "mouse_getposition",
    "message0": "get mouse position",
    "output": "Array",
    "colour": 210,
    "tooltip": "Returns the current position of the mouse. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.getPosition"
  },
  {
    "type": "mouse_getcursor",
    "message0": "get cursor",
    "inputsInline": true,
    "output": null,
    "colour": 210,
    "tooltip": "Gets the current Cursor. ",
    "helpUrl": "https://love2d.org/wiki/love.mouse.getCursor"
  },
  {
    "type": "physics_setmeter",
    "message0": "set meter %1 scale %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "scale",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 270,
    "tooltip": "Sets the pixels to meter scale factor. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.setMeter"
  },
  {
    "type": "physics_newworld",
    "message0": "create new world %1 xg %2 yg %3 sleep %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "xg",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "yg",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "sleep",
        "check": "Boolean"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a new World. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newWorld"
  },
  {
    "type": "physics_newwheeljoint",
    "message0": "create wheel joint %1 body1 %2 body2 %3 x %4 y %5 ax %6 ay %7 collideConnected %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "body1"
      },
      {
        "type": "input_value",
        "name": "body2"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ax",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ay",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "collideConnected",
        "check": "Boolean"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a wheel joint. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newWheelJoint"
  },
  {
    "type": "physics_newweldjoint",
    "message0": "creates a constraint joint %1 body1 %2 body2 %3 x %4 y %5 collideConnected %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "body1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "body2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "collideConnected",
        "check": "Boolean"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a constraint joint between two bodies.",
    "helpUrl": "https://love2d.org/wiki/love.physics.newWeldJoint"
  },
  {
    "type": "physics_newrectangleshape",
    "message0": "new rectangle shape %1 width %2 height %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "height",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 270,
    "tooltip": "Shorthand for creating rectangular PolygonShapes. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newRectangleShape"
  },
  {
    "type": "physics_newpolygonshape",
    "message0": "create new polygon shape %1 vertices %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "vertices",
        "check": "Array"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a new PolygonShape. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newPolygonShape"
  },
  {
    "type": "physics_newmousejoint",
    "message0": "create bew mouse joint %1 body %2 x %3 y %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "body"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Create a joint between a body and the mouse. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newMouseJoint"
  },
  {
    "type": "physics_getdistance",
    "message0": "distance between two fixtures %1 fixture1 %2 fixture2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "fixture1"
      },
      {
        "type": "input_value",
        "name": "fixture2"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Returns the two closest points between two fixtures and their distance. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.getDistance"
  },
  {
    "type": "physics_getmeter",
    "message0": "get meter scale factor",
    "inputsInline": true,
    "output": "Number",
    "colour": 270,
    "tooltip": "Returns the meter scale factor. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.getMeter"
  },
  {
    "type": "physics_newbody",
    "message0": "create new body %1 world %2 x %3 y %4 type %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "world"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "static",
            "static"
          ],
          [
            "dynamic",
            "dynamic"
          ],
          [
            "kinematic",
            "kinematic"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a new body. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newBody"
  },
  {
    "type": "physics_newcircleshape",
    "message0": "create new circle shape %1 radius %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "radius",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 270,
    "tooltip": "Creates a new CircleShape. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newCircleShape"
  },
  {
    "type": "physics_newchainshape",
    "message0": "create new chain shape %1 loop %2 points %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "loop",
        "check": "Boolean"
      },
      {
        "type": "input_value",
        "name": "points",
        "check": "Array"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a new ChainShape. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newChainShape"
  },
  {
    "type": "physics_newedgeshape",
    "message0": "create new edge shape %1 x1 %2 x2 %3 x3 %4 x4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x3",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x4",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates a new EdgeShape.",
    "helpUrl": "https://love2d.org/wiki/love.physics.newEdgeShape"
  },
  {
    "type": "physics_newfixture",
    "message0": "create new fixture %1 body %2 shape %3 density %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "body"
      },
      {
        "type": "input_value",
        "name": "shape"
      },
      {
        "type": "input_value",
        "name": "density",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 270,
    "tooltip": "Creates and attaches a Fixture to a body. ",
    "helpUrl": "https://love2d.org/wiki/love.physics.newFixture"
  },
  {
    "type": "audio_setdistancemodel",
    "message0": "set distance attenuation model %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "model",
        "options": [
          [
            "none",
            "none"
          ],
          [
            "inverse",
            "inverse"
          ],
          [
            "inverseclamped",
            "inverseclamped"
          ],
          [
            "linear",
            "linear"
          ],
          [
            "linearclamped",
            "linearclamped"
          ],
          [
            "exponent",
            "exponent"
          ],
          [
            "exponentclamped",
            "exponentclamped"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Sets the distance attenuation model. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setDistanceModel"
  },
  {
    "type": "audio_getdistancemodel",
    "message0": "get distance model",
    "output": "String",
    "colour": 0,
    "tooltip": "Returns the distance attenuation model.",
    "helpUrl": "https://love2d.org/wiki/love.audio.getDistanceModel"
  },
  {
    "type": "audio_setdopplerscale",
    "message0": "set doppler scale %1 scale %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "scale",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Sets a global scale factor for velocity-based doppler effects. The default scale value is 1. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setDopplerScale"
  },
  {
    "type": "audio_seteffect",
    "message0": "set audio effect %1 name %2 settings %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "settings",
        "check": "Array"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Defines an effect that can be applied to a Source. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setEffect"
  },
  {
    "type": "audio_setmixwithsystem",
    "message0": "mix the audio with system's audio %1 mix %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "mix",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 0,
    "tooltip": "Sets whether the system should mix the audio with the system's audio. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setMixWithSystem"
  },
  {
    "type": "audio_setorientation",
    "message0": "set orientation of the listener %1 fx %2 fy %3 fz %4 ux %5 uy %6 uz %7",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "fx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "fy",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "fz",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ux",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "uy",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "uz",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Sets the orientation of the listener. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setOrientation"
  },
  {
    "type": "audio_setposition",
    "message0": "setposition of the listener %1 x %2 y %3 z %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "z",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Sets the position of the listener, which determines how sounds play. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setPosition"
  },
  {
    "type": "audio_setvelocity",
    "message0": "set velocity of the listener %1 x %2 y %3 z %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "z",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Sets the velocity of the listener. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setVelocity"
  },
  {
    "type": "audio_setvolume",
    "message0": "set volume %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "volume",
        "value": 0,
        "min": 0,
        "max": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Sets the master volume. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.setVolume"
  },
  {
    "type": "audio_stop",
    "message0": "stop audio",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Stops specific or all currently played sources. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.stop"
  },
  {
    "type": "audio_pause",
    "message0": "pause audio",
    "output": null,
    "colour": 0,
    "tooltip": "Pauses specific or all currently played Sources. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.pause"
  },
  {
    "type": "audio_newsource",
    "message0": "create new audio source %1 file path %2 %3 type %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "filename",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "static",
            "static"
          ],
          [
            "stream",
            "stream"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 0,
    "tooltip": "https://love2d.org/wiki/love.audio.newSource",
    "helpUrl": "Creates a new Source from a filepath, File, Decoder or SoundData. Sources created from SoundData are always static. "
  },
  {
    "type": "audio_iseffectssupported",
    "message0": "is effects supported",
    "output": "Boolean",
    "colour": 0,
    "tooltip": "Gets whether audio effects are supported in the system. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.isEffectsSupported"
  },
  {
    "type": "audio_getvolume",
    "message0": "get audio volume",
    "output": "Number",
    "colour": 0,
    "tooltip": "Returns the master volume. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getVolume"
  },
  {
    "type": "audio_getvelocity",
    "message0": "get audio velocity",
    "output": "Array",
    "colour": 0,
    "tooltip": "Returns the velocity of the listener. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getVelocity"
  },
  {
    "type": "audio_getrecordingdevices",
    "message0": "get recording devices",
    "output": "Array",
    "colour": 0,
    "tooltip": "Gets a list of RecordingDevices on the system. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getRecordingDevices"
  },
  {
    "type": "audio_getposition",
    "message0": "get listener position ",
    "output": "Array",
    "colour": 0,
    "tooltip": "Returns the position of the listener. Please note that positional audio only works for mono (i.e. non-stereo) sources. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getPosition"
  },
  {
    "type": "audio_getorientation",
    "message0": "get listener orientation",
    "output": "Array",
    "colour": 0,
    "tooltip": "Returns the orientation of the listener. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getOrientation"
  },
  {
    "type": "audio_getmaxsourceeffects",
    "message0": "get maximum number of active effects",
    "output": "Number",
    "colour": 0,
    "tooltip": "Gets the maximum number of active Effects in a single Source object, that the system can support. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getMaxSourceEffects"
  },
  {
    "type": "audio_getmaxsceneeffects",
    "message0": "get maximum number of active effects",
    "output": "Number",
    "colour": 0,
    "tooltip": "Gets the maximum number of active effects supported by the system. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getMaxSceneEffects"
  },
  {
    "type": "audio_geteffect",
    "message0": "get settings associated with an effect %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 0,
    "tooltip": "Gets the settings associated with an effect. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getEffect"
  },
  {
    "type": "audio_getdopplerscale",
    "message0": "get scale factor for doppler effects",
    "output": "Number",
    "colour": 0,
    "tooltip": "Gets the current global scale factor for velocity-based doppler effects. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getDopplerScale"
  },
  {
    "type": "audio_getactivesourcecount",
    "message0": "get number of simultaneously playing sources",
    "output": "Number",
    "colour": 0,
    "tooltip": "Gets the current number of simultaneously playing sources. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getActiveSourceCount"
  },
  {
    "type": "audio_getactiveeffects",
    "message0": "get active effects",
    "output": "Array",
    "colour": 0,
    "tooltip": "Gets a list of the names of the currently enabled effects. ",
    "helpUrl": "https://love2d.org/wiki/love.audio.getActiveEffects"
  },
  {
    "type": "filesystem_append",
    "message0": "append data to file %1 name %2 data %3 size %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "data",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "size",
        "check": "Number"
      }
    ],
    "output": "Array",
    "colour": 140,
    "tooltip": "Append data to an existing file. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.append"
  },
  {
    "type": "filesystem_aresymlinksenabled",
    "message0": "are symlinks enabled",
    "output": "Boolean",
    "colour": 140,
    "tooltip": "Gets whether love.filesystem follows symbolic links. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.areSymlinksEnabled"
  },
  {
    "type": "filesystem_createdirectory",
    "message0": "create directory %1 name %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 140,
    "tooltip": "Recursively creates a directory. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.createDirectory"
  },
  {
    "type": "filesystem_getdirectoryitems",
    "message0": "get directory items %1 directory name %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 140,
    "tooltip": " Returns a table with the names of files and subdirectories in the specified path.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getDirectoryItems"
  },
  {
    "type": "filesystem_getidentity",
    "message0": "get directory name for your game",
    "output": "String",
    "colour": 140,
    "tooltip": "Gets the write directory name for your game.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getIdentity"
  },
  {
    "type": "filesystem_getinfo",
    "message0": "get info abut directory %1 path %2 %3 filter type %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "path",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "filtertype",
        "options": [
          [
            "file",
            "file"
          ],
          [
            "directory",
            "directory"
          ],
          [
            "symlink",
            "symlink"
          ],
          [
            "other",
            "other"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 140,
    "tooltip": "Gets information about the specified file or directory. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getInfo"
  },
  {
    "type": "filesystem_getrequirepath",
    "message0": "get filesystem paths from where require is called",
    "output": "String",
    "colour": 140,
    "tooltip": "Gets the filesystem paths that will be searched when require is called. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getRequirePath"
  },
  {
    "type": "filesystem_getrealdirectory",
    "message0": "get absolute path of the directory containing %1 file path %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "filepath",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 140,
    "tooltip": "Gets the platform-specific absolute path of the directory containing a filepath. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getRealDirectory"
  },
  {
    "type": "filesystem_getsavedirectory",
    "message0": "get save directory",
    "output": "String",
    "colour": 140,
    "tooltip": "Gets the full path to the designated save directory.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getSaveDirectory"
  },
  {
    "type": "filesystem_getsource",
    "message0": "get path to the the .love file or directory",
    "output": "String",
    "colour": 140,
    "tooltip": "Returns the full path to the the .love file or directory.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getSource"
  },
  {
    "type": "filesystem_getuserdirectory",
    "message0": "get user directory",
    "output": "String",
    "colour": 140,
    "tooltip": "Returns the path of the user's directory ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getUserDirectory"
  },
  {
    "type": "filesystem_getworkingdirectory",
    "message0": "get current workong directory",
    "output": "String",
    "colour": 140,
    "tooltip": "Gets the current working directory. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.getWorkingDirectory"
  },
  {
    "type": "filesystem_init",
    "message0": "initializes love filesystem %1 apliaction name %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "appname",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 140,
    "tooltip": "Initializes love.filesystem,",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.init"
  },
  {
    "type": "filesystem_lines",
    "message0": "loop over lines in a file %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 140,
    "tooltip": "Iterate over the lines in a file. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.lines"
  },
  {
    "type": "filesystem_load",
    "message0": "load Lua file %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 140,
    "tooltip": "Loads a Lua file (but does not run it). ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.load"
  },
  {
    "type": "filesystem_mount",
    "message0": "mount zip file or folder %1 archive %2 mountpoint %3 append to path %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "archive",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "mountpoint",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "appendToPath",
        "check": "Boolean"
      }
    ],
    "output": "Boolean",
    "colour": 140,
    "tooltip": "Mounts a zip file or folder in the game's save directory for reading.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.mount"
  },
  {
    "type": "filesystem_newfile",
    "message0": "create file object %1 filename %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 140,
    "tooltip": "Creates a new File object. It needs to be opened before it can be accessed. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.newFile"
  },
  {
    "type": "filesystem_read",
    "message0": "read file %1 name %2 %3 size %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "size",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 140,
    "tooltip": "Read the contents of a file. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.read"
  },
  {
    "type": "filesystem_remove",
    "message0": "femove file or directory %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 140,
    "tooltip": "Removes a file or empty directory. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.remove"
  },
  {
    "type": "filesystem_setidentity",
    "message0": "set write directory for game %1 name %2 %3 append to path %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "appendToPath",
        "check": "Boolean"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 140,
    "tooltip": "Sets the write directory for your game.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.setIdentity"
  },
  {
    "type": "filesystem_setrequirepath",
    "message0": "set paths from where require is called %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "paths",
        "text": ""
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 140,
    "tooltip": "Sets the filesystem paths that will be searched when require is called. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.setRequirePath"
  },
  {
    "type": "filesystem_setsource",
    "message0": "set source of the game %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "path",
        "text": ""
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 140,
    "tooltip": "Sets the source of the game, where the code is present.",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.setSource"
  },
  {
    "type": "filesystem_setsymlinksenabled",
    "message0": "enable symbolic links %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "enable",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 140,
    "tooltip": "Sets whether love.filesystem follows symbolic links. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.setSymlinksEnabled"
  },
  {
    "type": "filesystem_unmount",
    "message0": "unmount zip file or folder %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "archive",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 140,
    "tooltip": "Unmounts a zip file or folder previously mounted for reading with love.filesystem.mount. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.unmount"
  },
  {
    "type": "filesystem_write",
    "message0": "write data to file %1 file name %2 %3 data %4 size %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "data",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "size",
        "check": "Number"
      }
    ],
    "output": "Array",
    "colour": 140,
    "tooltip": "Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents. ",
    "helpUrl": "https://love2d.org/wiki/love.filesystem.write"
  },
  {
    "type": "math_atan2",
    "message0": "math arc tangent %1 y %2 x %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      }
    ],
    "inputsInline": false,
    "output": "Number",
    "colour": 230,
    "tooltip": "Returns the arc tangent of y/x (in radians)",
    "helpUrl": "https://pgl.yoyo.org/luai/i/math.atan2"
  },
  {
    "type": "math_sin",
    "message0": "sin %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "sinus",
    "helpUrl": ""
  },
  {
    "type": "math_cos",
    "message0": "cos %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "val",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "cosinus",
    "helpUrl": ""
  }
]
