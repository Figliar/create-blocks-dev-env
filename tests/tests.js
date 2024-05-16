/**
 * Test cases for calling return and only call functions in Lua
 */
const function_calls = [
    "love.graphics.setNewFont(1)",
    "a = 2\nlove.graphics.setNewFont(a)",
    "a = 2\nlove.graphics.setNewFont(a[1])",
    "a = 2\nlove.graphics.setNewFont(a.a)",
    "a = {\"a\"}\nlove.graphics.setNewFont(a.a)",
    "foo1 = 1\nwidth = 5\nlove.graphics.stencil(foo1, replace, 1, width)",
    "foo2 = 2\nwidth = 5\nlove.graphics.stencil(foo2, increment, 1, width)",
    "foo3 = 3\nwidth = 5\nlove.graphics.stencil(foo3, decrement, 1, width)",
    "foo4 = 4\nwidth = foo4\nlove.graphics.stencil(foo4, incrementwrap, 1, width)",
    "foo5 = 5\nwidth = \"t\"\nlove.graphics.stencil(foo5, decrementwrap, 1, width)",
    "foo6 = 6\nwidth = 5.8\nlove.graphics.stencil(foo6, invert, 1, width)",
    "love.graphics.rectangle()",
    "love.graphics.rectangle(fill)",
    "love.graphics.rectangle(line)",
    "love.graphics.rectangle(line, 1)",
    "love.graphics.rectangle(line, 1, 2)",
    "love.graphics.rectangle(line, 1, 2 ,3)",
    "love.graphics.rectangle(line, 1, 2 , 3, 4)",
    "love.graphics.rectangle(line, 1, 2 , 3, 4, 5)",
    "love.graphics.rectangle(line, 1, 2 , 3, 4, 5.5987469)",
    "love.graphics.rectangle(line, 1, 2 , 3, 4, 5.5987469, 100000000000000)",
    "love.graphics.rectangle(line, 1, 2 , 3, 4, 5.5987469, 100000000000000, -6)",
    "b = 6\na = b\nlove.graphics.rectangle(line, 1, 2 , 3, 4, 5.5987469, 100000000000000, -a)",
    "a = 1\nlove.graphics.rectangle(line, a, 1, 2, 3, 4, 5, a[1])",
    "love.graphics.printf()",
    "a = 1\nlove.graphics.printf(a)",
    "love.graphics.printf(\"a\")",
    "love.graphics.printf(\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\")",
    "love.graphics.printf(\"str\", 1, 2, 3, center, 4, 5, 6, 7, 8, 9, 10)",
    "love.graphics.printf(\"str\", 1, 2, 3, right, 4, 5, 6, 7, 8, 9, 10)",
    "love.graphics.printf(\"str\", 1, 2, 3, left, 4, 5, 6, 7, 8, 9, 10)",
    "love.graphics.printf(\"str\", 1, 2, 3, justify, 4, 5, 6, 7, 8, 9, 10)",
    "love.graphics.print()",
    "love.graphics.print(\"str\")",
    "love.graphics.print(\"str\",1,2,3,4,5,6,7,8,9,10)",
    "love.graphics.present()",
    "love.graphics.polygon()",
    "love.graphics.polygon(fill)",
    "love.graphics.polygon(line)",
    "a = 1\nlove.graphics.polygon(line, a)",
    "a = {1, 2, 3, 4, 5, 6}\nlove.graphics.polygon(line, a[0])",
    "love.graphics.points()",
    "a = 489\nlove.graphics.points(a)",
    "love.graphics.line()",
    "a = 1\nlove.graphics.line(a)",
    "a = 1\nlove.graphics.line(a, a, a, a, a)",
    "love.graphics.flushBatch()",
    "love.graphics.ellipse()",
    "love.graphics.ellipse(fill)",
    "love.graphics.ellipse(line)",
    "love.graphics.ellipse(line, 1)",
    "love.graphics.ellipse(fill, 1, 2)",
    "love.graphics.ellipse(fill, 1, 2, 3)",
    "love.graphics.ellipse(fill, 1, 2, 3, 4)",
    "love.graphics.ellipse(fill, 1, 2, 3, 4, 5)",
    "love.graphics.drawLayer()",
    "a = 1\nlove.graphics.drawLayer(a)",
    "a = 1\nlove.graphics.drawLayer(a, 1)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4, 5)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4, 5, 6)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4, 5, 6, 7)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4, 5, 6, 7, 8)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4, 5, 6, 7, 8, 9)",
    "a = 1\nlove.graphics.drawLayer(a, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
    "love.graphics.draw()",
    "a = 1\nlove.graphics.draw(a)",
    "a = 1\nlove.graphics.draw(a, 1)",
    "a = 1\nlove.graphics.draw(a, 1, 2)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3, 4)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3, 4, 5)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3, 4, 5, 6)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3, 4, 5, 6, 7)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3, 4, 5, 6, 7, 8.9)",
    "a = 1\nlove.graphics.draw(a, 1, 2, 3, 4, 5, 6, 7, 8.9, -9)",
    "love.graphics.discard()",
    "a = 1\nb = 2\nlove.graphics.discard(a, b)",
    "a = {}\nb = {}\nlove.graphics.discard(a[1], b[a])",
    "a = {}\nb = {}\nlove.graphics.discard(a[1], b[a[1]])",
    "love.graphics.clear()",
    "love.graphics.circle()",
    "love.graphics.circle(line)",
    "love.graphics.circle(line, 1)",
    "love.graphics.circle(line, 1, 2)",
    "love.graphics.circle(line, 1, 2, 3)",
    "a = 1\nb = 2\nc = 3\nlove.graphics.circle(fill, a, b, c)",
    "love.graphics.arc()",
    "love.graphics.arc(line)",
    "love.graphics.arc(line, 1)",
    "love.graphics.arc(line, 1, 2)",
    "love.graphics.arc(line, 1, 2, 3)",
    "love.graphics.arc(line, 1, 2, 3, 180)",
    "love.graphics.arc(line, 1, 2, 3, 500, 10)",
    "love.graphics.arc(line, 1, 2, 3, 359, 1, 15)",
    "love.graphics.translate()",
    "love.graphics.translate(1, 2)",
    "a = 1\nlove.graphics.translate(a, 2)",
    "b = 2\nlove.graphics.translate(1, b)",
    "a = 1\nb = 2\nlove.graphics.translate(a, b)",
    "a = {1}\nb = 2\nlove.graphics.translate(a[0], b)",
    "a = 1\nb = {2}\nlove.graphics.translate(a, b[0])",
    "a = {1}\nb = {2}\nlove.graphics.translate(a[0], b[0])",
    "love.graphics.shear()",
    "love.graphics.shear(1, 2)",
    "a = 1\nb = 2\nlove.graphics.shear(a, b)",
    "love.graphics.scale()",
    "love.graphics.scale(1, 2)",
    "a = 1\nlove.graphics.scale(a, a)",
    "love.graphics.rotate()",
    "love.graphics.rotate(1)",
    "a = 365\nlove.graphics.rotate(a)",
    "love.graphics.push()",
    "love.graphics.pop()",
    "love.graphics.origin()",
    "love.graphics.reset()",
    "love.graphics.setBackgroundColor()",
    "love.graphics.setBackgroundColor(1)",
    "love.graphics.setBackgroundColor(1, 1)",
    "love.graphics.setBackgroundColor(1, 1, 1)",
    "love.graphics.setBackgroundColor(1, 1, 1, 1)",
    "love.graphics.setBackgroundColor(1, 1, 1, 0)",
    "love.graphics.setBackgroundColor(1, 1, 0, 0)",
    "love.graphics.setBackgroundColor(1, 0, 0, 0)",
    "love.graphics.setBackgroundColor(0, 0, 0, 0)",
    "love.graphics.setBackgroundColor(1, 0, 1, 0)",
    "love.graphics.setBackgroundColor(0, 1, 0, 1)",
    "love.graphics.setColor()",
    "love.graphics.setColor(1)",
    "love.graphics.setColor(1, 1)",
    "love.graphics.setColor(1, 1, 1)",
    "love.graphics.setColor(1, 1, 1, 1)",
    "love.graphics.setWireframe()",
    "love.graphics.setWireframe(true)",
    "love.graphics.setWireframe(false)",
    "love.graphics.setWireframe(nil)",
    "a = true\nlove.graphics.setWireframe(a)",
    "love.graphics.setScissor()",
    "love.graphics.setScissor(nil)",
    "love.graphics.setScissor(nil, 1)",
    "love.graphics.setScissor(nil, 1, 2)",
    "love.graphics.setScissor(nil, 1, 2, 3)",
    "a=1\nb=2\c=3\nlove.graphics.setScissor(nil, a, b, c)",
    "a={0}\nb={2}\c={3}\nlove.graphics.setScissor(nil, a[0], b[a[0]], c[a[a[0]]])",
    "love.graphics.setPointSize()",
    "love.graphics.setPointSize(nil)",
    "love.graphics.setPointSize(1)",
    "a = 1\nlove.graphics.setPointSize(a)",
    "love.graphics.setLineWidth()",
    "love.graphics.setLineWidth(1)",
    "hokuspokus = 3569874.478596\nlove.graphics.setLineWidth(hokuspokus)",
    "love.graphics.setLineStyle()",
    "love.graphics.setLineStyle(rough)",
    "love.graphics.setLineStyle(smooth)",
    "love.graphics.setLineJoin()",
    "love.graphics.setLineJoin(miter)",
    "love.graphics.setLineJoin(none)",
    "love.graphics.setLineJoin(bevel)",

    "love.keyboard.setTextInput(true)",
    "love.keyboard.setTextInput(false)",
    "love.keyboard.setTextInput(nil)",
    "a = 1\nlove.keyboard.setTextInput(a)",
    "love.keyboard.setKeyRepeat(true)",
    "love.keyboard.setKeyRepeat(false)",
    "love.keyboard.setKeyRepeat(nil)",
    "a = 1\nlove.keyboard.setKeyRepeat(a)",

    "love.window.setTitle()",
    "love.window.setTitle(nil)",
    "a = true\nlove.window.setTitle(a)",
    "love.window.setPosition()",
    "love.window.setPosition(nil,nil,5879)",
    "love.window.setPosition(1,1,5879)",
    "love.window.setPosition(1,1,5879)",
    "love.window.restore()",
    "love.window.minimize()",
    "love.window.maximize()",

    "love.system.vibrate()",
    "love.system.vibrate(1)",
    "love.system.vibrate(nil)",
    "a = 1\nlove.system.vibrate(a)",
    "love.system.setClipboardText()",
    "love.system.setClipboardText(nil)",
    "a = 1\nlove.system.setClipboardText(a)",

    "love.timer.sleep()",
    "love.timer.sleep(1)",
    "love.timer.sleep(nil)",
    "a = 1\nlove.timer.sleep(a)",

    "love.math.setRandomState()",
    "love.math.setRandomState(nil)",
    "a = 1\nlove.math.setRandomState(a)",
    "love.math.setRandomSeed()",
    "love.math.setRandomSeed(nil)",
    "vArIaBlE = 1\nlove.math.setRandomSeed(vArIaBlE)",
    "vArIaBlE = 1\nlove.math.setRandomSeed(-vArIaBlE)",

    "love.mouse.setY()",
    "love.mouse.setY(5)",
    "a = 5.4\nlove.mouse.setY(-a)",
    "love.mouse.setX()",
    "love.mouse.setX(1.8)",
    "s = 123456789\nlove.mouse.setX(s)",
    "love.mouse.setVisible()",
    "love.mouse.setVisible(nil)",
    "love.mouse.setVisible(true)",
    "love.mouse.setVisible(false)",
    "local a = 5\nlove.mouse.setVisible(a)",
    "love.mouse.setRelativeMode()",
    "love.mouse.setRelativeMode(nil)",
    "love.mouse.setRelativeMode(true)",
    "love.mouse.setRelativeMode(false)",
    "love.mouse.setPosition()",
    "love.mouse.setPosition(1, 2)",
    "a = 1\nb = a\nlove.mouse.setPosition(a, b)",
    "love.mouse.setGrabbed()",
    "love.mouse.setGrabbed(nil)",
    "love.mouse.setGrabbed(true)",
    "love.mouse.setGrabbed(false)",
    "love.mouse.setCursor()",
    "love.mouse.setCursor(nil)",
    "love.mouse.setCursor(true)",
    "love.mouse.setCursor(false)",
    "love.mouse.setCursor(-5)",

    "love.physics.setMeter()",
    "love.physics.setMeter(-987)",
    "love.physics.setMeter(nil)",
    "a = \"s\"\nlove.physics.setMeter(a)",

    "love.audio.setDistanceModel()",
    "love.audio.setDistanceModel(none)",
    "love.audio.setDistanceModel(inverse)",
    "love.audio.setDistanceModel(inverseclamped)",
    "love.audio.setDistanceModel(linear)",
    "love.audio.setDistanceModel(linearclamped)",
    "love.audio.setDistanceModel(exponent)",
    "love.audio.setDistanceModel(exponentclamped)",
    "love.audio.setDopplerScale()",
    "a = {}\nlove.audio.setDopplerScale(a[1])",
    "love.audio.setEffect()",
    "love.audio.setEffect(\"t\", nil)",
    "love.audio.setEffect(nil, nil)",
    "a = 1\nlove.audio.setEffect(a, a)",
    "love.audio.setOrientation()",
    "love.audio.setOrientation(1)",
    "love.audio.setOrientation(1, 2)",
    "love.audio.setOrientation(1, 2, 3)",
    "love.audio.setOrientation(1, 2, 3, 4)",
    "love.audio.setOrientation(1, 2, 3, 4, 5)",
    "love.audio.setOrientation(1, 2, 3, 4, 5, 6)",
    "a = 5\nlove.audio.setOrientation(1, nil, 3, a, 5, 6)",
    "love.audio.setPosition()",
    "love.audio.setPosition(1,2,3)",
    "love.audio.setPosition(nil,nil,nil)",
    "a = 1\nb = a\nc = b\nlove.audio.setPosition(a,b,c)",
    "love.audio.setVelocity()",
    "love.audio.setVelocity(180,180,180)",
    "love.audio.setVolume()",
    "love.audio.setVolume(180)",
    "love.audio.stop()",

    "love.filesystem.init()",
    "love.filesystem.init(nil)",
    "love.filesystem.init(\"app\")",
    "appName = \"app\"\nlove.filesystem.init(appName)",
    "love.filesystem.setIdentity()",
    "love.filesystem.setIdentity(name, nil)",
    "identity = \"s\"\nlove.filesystem.setIdentity(name, identity)",
    "love.filesystem.setRequirePath()",
    "name = \"s\"\nlove.filesystem.setRequirePath(name)",
    "love.filesystem.setSource()",
    "name = \"s\"\nlove.filesystem.setSource(name)",
    "love.filesystem.setSymlinksEnabled()",
    "love.filesystem.setSymlinksEnabled(nil)",
    "love.filesystem.setSymlinksEnabled(true)",
    "love.filesystem.setSymlinksEnabled(false)",
    "a = 4\nlove.filesystem.setSymlinksEnabled(a)",
    "a = love.graphics.transformPoint(1, 5)"
];

/**
 * Specific test cases for function definitions in Lua (LOVED2D callbacks)
 */
const function_definitions =[
    "-- comment before\n" +
    "function love.keypressed( key, scancode, isrepeat )\n" +
    "  -- first in\n" +
    "  key = 1\n" +
    "  -- comment\n" +
    "  scancode = 5\n" +
    "  --\n" +
    "end\n" +
    "-- comment after\n" +
    "\n" +
    "\n" +
    "--comment way back",

    "function love.keypressed() end",
    "a = key\nb = scancode\nc = isrepeat\nfunction love.keypressed(a, b, c) end",
    "function love.keyreleased() end",
    "a = key\nb = scancode\nfunction love.keyreleased(a, b)\na = b\nb = a\nend",
    "function love.mousepressed() end",
    "function love.mousepressed( a, b, s, istouch, presses )\nend",
    "function love.mousereleased() end",
    "function love.load() end",
    "function run.game(bool)\n  game = bool\nend\n\nfunction love.load() \nwhile true do\nrun.game(true)\nend\nend",
    "function love.update() end",
    "function love.update( dt ) \nfor exp = 1, 10, 1 do\n  print(i)\nend\nend",
    "function love.draw() end",
    "function love.draw() \n  if true then\n    love.graphics.rectangle(line, 1, 2 , 3, 4, 5)\n  else\n    love.graphics.printf('ERROR')\n  end\nend",
    "function love.quit() end",
    "function love.quit() \n  game = false\n  state = nil\n  print('exiting game')\nend",
    "function love.focus() end",
    "a = {1, 2, 3, 4, 5, 6}\nfunction love.focus( focus ) \n  for _, j in ipairs(a) do\n    a = j * (a[1] - 8) / (9 + 8)\n  end\nend",
    "function love.visible() end",
    "function love.visible( visible )\n  print('Is visible:' .. visible)\nend",
    "function love.resize() end",
    "function love.resize( widht, height)\n  width = width + 20\n  height = height > width and height or width\nend",
    "function love.textinput() end",
    "function love.mousemoved() end",
    "function love.mousemoved( x, y, dx, dy, istouch ) \n  mouse_position = {x, y, dx, dy, istouch}\nend",
    "function love.wheelmoved() end",
    "function love.mousefocus() end",
    "function love.textedited() end",
    "function love.directorydropped(key) end",
    "function love.directorydropped(joystick) end",
    "function love.directorydropped( path ) \n  if path == 'path/there' then\n    -- cycle\n    for i, j in ipairs({1, 2, 3}) do\n      newPath = path .. j\n      dir = love.filesystem.createDirectory(newPath)\n    end \n  end\nend",
    "function love.filedropped() end",
    "function love.displayrotated() end",
    "function love.gamepadaxis() end",
    "function love.gamepadpressed() end",
    "function love.gamepadreleased() end",
    "function love.joystickadded() end",
    "function love.joystickaxis() end",
    "function love.joystickhat() end",
    "function love.joystickpressed() end",
    "function love.joystickpressed( direction, errorstr )\nend",
    "function love.joystickreleased() end",
    "function love.threaderror() end",
    "function love.errorhandler() end",
    "function love.joystickremoved() end",
    "function love.lowmemory() end",
    "function love.run() end",
    "function love.touchmoved() end",
    "function love.touchmoved( focus, start, button, direction, isrepeat, visible )\nend",
    "function love.touchpressed() end",
    "function love.touchreleased() end",
    "function love.touchreleased(axis, value, text, hat, width) end",
];

/**
 * Test cases for basic work with variables in Lua
 */
const variables = [
    "a = 1",
    "a = 2.5",
    "a = {}",
    "a = {1, \"string\", false, true, nil}",
    "a = {}\nb = {a[0], a}",
    "function foo()\nreturn true\nend\nb = {foo(), {}}",
    "a = 1\nb = a\nc = b\nd = c\ne = d\nf = e",
    "function a()\nend",
    "function a()\na = 1\nend",
    "function a()\na = 1\nend",
    "function a()\na = 1\nif true then\nreturn\nend\nend",
    "function a()\na = 1\nif true then\nreturn\nelse\na = a + 1\nend\nend",
    "function a()\na = 1\nif true then\nreturn\nelseif false then\na = {}\nelse\na = a + 1\nend\nend",
];

/**
 * Test cases for basic work with numbers, arithmetic expressions and math functions in Lua
 */
const math = [
    "a = 1 + 1",
    "a = 1 + 1 * 2",
    "a = 1 + 1 * 2 - 6",
    "a = 1 + 1 * 2 - 6 / 9",
    "a = 1 + 1 * 2 - 6 / 9 ^ 7",
    "y = (a + 5) / 2",
    "z = y * (a - 3) + 2",
    "a = 10 + a * (a - 5)",
    "a = math.sqrt(9)",
    "a = math.abs(9)",
    "a = a + 1",
    "a = math.floor(3.1 + .5)",
    "a = math.ceil(3.1)",
    "a = -math.ceil(3.1)",
    "a = math_sum({})",
    "a = math_min({1})",
    "a = math_max(a)",
    "a = math_max({})",
    "a = math_average({})",
    "a = math_average({a,2})",
    "a = math_median({})",
    "a = math_median({a[1]})",
    "a = math_modes({})",
    "a = math_modes({\"string\"})",
    "a = math_standard_deviation({})",
    "a = math_standard_deviation({nil})",
    "a = math_random_list({})",
    "a = math_random_list({true,false})",
    "a = -math.pi",
    "a = math.exp(1)",
    "a = -math.exp(1)",
    "a = math.sqrt(2)",
    "a = math.sqrt(1 / 2)",
    "a = -math.huge",
    "a = 64 % 10",
    "a = 64 % 10 - 6",
    "a = 64 % 10 / 6",
    "a = 64 * 8 % 10",
    "a = 64 + 8 % 10",
    "a = -9",
    "a = -math.log(9, 10)",
    "a = math.log(9)",
    "a = math.exp(9)",
    "a = 10 ^ 9",
    "a = {}\na[1] = 5",
    "a = {}\na[#a] = 5",
    "a = {}\na[#a + 1 - 1] = 5",
    "a = {}\na[((#a + 1) - 1)] = 5",
    "a = {}\na[math.random(#a, 0)] = 5",
    "a = {}\nb = #a",
    "a = math_max({math_min({50, 1}), 100})",
    "a = math.random(1, 100)",
    "a = math.random()",
    "a = math.deg(math.atan2(0, 0))",
    "a = math_max({math.sqrt(9) + math_min({5 * 4, 20}) + 10})",
    "a = math_max({math.sqrt(9) * math_min({5 * 4, 20}) + 10}) + math.ceil(3.14)",
    "b = math.sqrt(25) + math.abs(-10)",
    "a = 10 + (b * (a - 5)) / 2",
    "z = (y * 2) + (b / 2)",
    "y = (y - 5) / (2 * 4)",
    "x = 10 * (5 + 3)",
    "y = (x - 5) / (2 * 4) + math.sqrt(16)",
    "z = (y * 2) + (x / 2) * math.abs(-3)",
    "a = 10 + (a * (a - 5)) / 2 - math.ceil(3.14)",
    "b = math.sqrt(25) + math.abs(-10) * math.floor(7.5)",
    "a = math_max({math.sqrt(9) * math_min({5 * 4 / 20}) + 10}) + math.ceil(3.14) - math.floor(math.exp(1))"
];

/**
 * Test cases for basic work with strings and functions which work with strings in Lua
 */
const text = [
    "a = ''",
    "a = '\\n'",
    "a = 'String'\n",
    "a = '' .. ''\n",
    "a = 'String' .. ''\n",
    "a = table.concat({'String', '', a})\n",
    "a = a .. 'String'\n",
    "a = ''\n",
    "a = #'String'\n",
    "a = #a == 0\n",
    "a = firstIndexOf(a, 'String')\n",
    "text = lastIndexOf(a, 'String')\n",
    "a = string.sub(text, a, a)\n",
    "a = string.sub(text .. text, a, a)\n",
    "a = string.sub(text, -a, -a)\n",
    "a = string.sub(\"text\" .. \"text\", -a, -a)\n",
    "a = string.sub(text, 1, 1)\n",
    "a = string.sub(text .. \"text\", 1, 1)\n",
    "a = string.sub(text, -1, -1)\n",
    "a = text_random_letter(text .. text)\n",
    "a = text_random_letter(text .. \"text\")\n",
    "a = text_random_letter(text .. \"text\" .. text .. \"'\")\n",
    "a = string.sub(text, 0, 2)\n",
    "a = string.sub(string.sub(text, 0, 2), 0, 2)\n",
    "a = string.sub(text, 0, -2)\n",
    "a = string.sub(text, 0, -1)\n",
    "a = string.sub(text, -0, 2)\n",
    "a = string.sub(text, 1, 2)\n",
    "a = string.sub(text, -0, 2)\n",
    "a = string.sub(text, -0, -2)\n",
    "a = string.sub(text, -0, -1)\n",
    "a = string.sub(text, 1, -2)\n",
    "a = string.upper('String')\n",
    "a = string.upper('String' .. \"string\")\n",
    "a = string.lower('String' .. string.upper('String' .. \"string\"))\n",
    "a = text_titlecase('String' .. 'str')\n",
    "a = string.gsub('String', \"^%s*(.-)%s*$\", \"%1\")\n",
    "a = string.gsub('String', \"^%s*(,-)\", \"%1\")\n",
    "a = string.gsub('String', \"(.-)%s*$\", \"%1\")\n",
    "a = string.gsub('Stringdlhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', \"(.-)%s*$\", \"%1\")\n",
    "print('String')\n",
    "print('String' .. string.upper('String'))\n",

    "a = 'String' .. '' .. string.sub(text, a, a) .. text_random_letter(text .. text) .. " +
    "string.gsub('String', \"(.-)%s*$\", \"%1\") .. text_titlecase('String' .. 'str')",

    "a = text_prompt('String')\n",
    "a = tonumber(text_prompt('String'), 10)"
];

/**
 * Test cases for basic work with lists and functions which work with lists in Lua
 */
const lists = [
    "a = {}\n",
    "a = {nil, nil, nil}\n",
    "a = {{}, a, 0}\n",
    "a = {{}, nil, 0, a}\n",
    "a = create_list_repeated(5, 5)\n",
    "a = #{}\n",
    "a = #a\n",
    "list = #a == 0\n",
    "a = first_index(list, 5)\n",
    "a = last_index(list, 5)\n",
    "a = list[5]\n",
    "a = list[#list + 1 - 5]\n",
    "a = list[1]\n",
    "a = list[#list]\n",
    "a = list[math.random(#list)]\n",
    "a = table.remove(list, 5)\n",
    "table.remove(list, 5)\n",
    "list[5] = 4\n",
    "list[#list + 1 - 5] = 4\n",
    "list[1] = 4\n",
    "list[#list] = 4\n",
    "list[math.random(#list)] = 4\n",
    "table.insert(list, 5, 4)\n",
    "table.insert(list, #list + 1 - 5, 4)\n",
    "table.insert(list, 1, 4)\n",
    "table.insert(list, #list + 1, 4)\n",
    "table.insert(list, math.random(#list), 4)\n",
    "a = list_sublist_from_start_from_start(list, 2, 2)\n",
    "a = list_sublist_from_start_from_end(list, 2, 2)\n",
    "a = list_sublist_from_start_last(list, 2)\n",
    "a = list_sublist_from_end_from_start(list, 2, 2)\n",
    "a = list_sublist_from_end_from_end(list, 2, 2)\n",
    "a = list_sublist_from_end_last(list, 2)\n",
    "a = list_sublist_first_from_start(list, 2)\n",
    "a = list_sublist_first_from_end(list, 2)\n",
    "a = list_sublist_first_from_end(list, 2, 1, 3 6)\n",
    "a = list_sublist_first_from_start(list, 2, ignoring)\n",
    "a = list_sublist_first_last(list)\n",
    "a = list_sublist_first_last(list_sublist_first_from_end(list, 2))\n",
    "list = {}\na = list_sublist_from_end_last(list_sublist_from_start_last(list, 5, 2))\n",
    "a = list_string_split('String, string2', ',')\n",
    "a = table.concat(a, ',')\n",
    "a = list_sort(a, \"NUMERIC\", 1)\n",
    "a = list_sort(a, \"NUMERIC\", -1)\n",
    "a = list_sort(a, \"TEXT\", 1)\n",
    "a = list_sort(a, \"TEXT\", -1)\n",
    "a = list_sort(a, \"IGNORE_CASE\", 1)\n",
    "a = list_sort(a, \"IGNORE_CASE\", -1)",
    "a = {{{{{{{}}}}}}}",
    "a = {1, {2, {3, {4, {5, {6, {7}}}}}}}, 8",
    "list = {}\na = {list[5]}",
    "a = create_list_repeated({}, 5)",
    "a = create_list_repeated({1,2,{}}, 5)",
    "a = create_list_repeated(table.remove({1,2,{}}, 5), 5)",
    "table.insert(create_list_repeated(table.remove({1,2,{}}, 5), 5), math.random(#list), 4)",
    "a = list_sort(a, \"IGNORE_CASE\", 1)",
    "a = list_sort(a, \"NUMERIC\", 1)",
    "a = list_sort(a, \"TEXT\", -1)",
];

/**
 * Test cases for logic operations in Lua
 */
const logic = [
    "#!/usr/local/bin/lua\nif false then\nend",
    "if true then\nend",
    "if false then\nelse\nend",
    "if true then\nelse\nend",
    "if false then\nelseif true then\nelse\nend",
    "if true then\nelseif false then\nelse\nend",
    "a = 'th'\nb = 'is'\nif 'this' == a .. b then\nelseif false then\nelse\nend",
    "x = 20\nif x > 10 then\n  result = \"Greater than 10\"\nend\n",

    "if true then\n" +
    "  item = nil\n" +
    "end\n" +
    "if false then\n" +
    "  list = {}\n" +
    "elseif not true then\n" +
    "end\n" +
    "if false then\n" +
    "  a = 5\n" +
    "elseif not true then\n" +
    "elseif not false then\n" +
    "end\n" +
    "if item then\n" +
    "  a = false and nil or nil\n" +
    "elseif item == item + 6 then\n" +
    "elseif not nil and 1 + 1 == list[0] then\n" +
    "else\n" +
    "end\n" +
    "if not nil and a == 5 then\n" +
    "elseif not nil or a == 5 then\n" +
    "elseif not nil and a ~= 5 then\n" +
    "elseif not nil or a ~= 5 then\n" +
    "elseif not nil and a < 5 then\n" +
    "elseif not nil or a < 5 then\n" +
    "elseif not nil and a <= 5 then\n" +
    "elseif not nil or a <= 5 then\n" +
    "elseif not nil and a > 5 then\n" +
    "elseif not nil or a > 5 then\n" +
    "  b = 5 + 6\n" +
    "elseif not nil and a >= 5 then\n" +
    "elseif not nil or a >= 5 then\n" +
    "else\n" +
    "  if true and a or not a then\n" +
    "  end\n" +
    "end",

    "#!/usr/local/bin/lua\n" +
    "function a()\n" +
    "return 5\n" +
    "end\n" +
    "if true then\n" +
    "--\n" +
    "a = a() --\n" +
    "if false then\n" +
    "-- 1\n" +
    "e = 1\n" +
    "-- 2\n" +
    "f = 1\n" +
    "-- 3\n" +
    "if nil then\n" +
    "--\n" +
    "a = 5\n" +
    "--\n" +
    "c = 9\n" +
    "--\n" +
    "elseif false\n" +
    "--\n" +
    "else\n" +
    "--\n" +
    "end\n" +
    "--\n" +
    "return 1\n" +
    "--\n" +
    "end\n" +
    "--\n" +
    "b = 1\n" +
    "---\n" +
    "elseif false then\n" +
    "--lko\n" +
    "c = 1\n" +
    "--\n" +
    "d = 1\n" +
    "--59\n" +
    "else\n" +
    "-- 1\n" +
    "e = 1\n" +
    "-- 2\n" +
    "f = 1\n" +
    "-- 3\n" +
    "for exp=1,10,1 do end\n" +
    "a = a()\n" +
    "end"
];

/**
 * Test cases for loop structures in Lua
 */
const loops = [
    "-- For loop example\n" +
    "for i = 1, 5 do\n" +
    "    print(\"Iteration:\" .. i)\n" +
    "end",

    "-- While loop example\n" +
    "local i = 1\n" +
    "while i <= 5 do\n" +
    "    print(\"Iteration:\" .. i)\n" +
    "    i = i + 1\n" +
    "end",

    "-- Repeat-until loop example\n" +
    "local i = 1\n" +
    "repeat\n" +
    "    print(\"Iteration:\" .. i)\n" +
    "    i = i + 1\n" +
    "until i > 5",

    "-- Nested for loops example\n" +
    "for i = 1, 3 do\n" +
    "    print(\"Outer loop iteration:\" .. i)\n" +
    "    for j = 1, 2 do\n" +
    "        print(\"Inner loop iteration:\" .. j)\n" +
    "    end\n" +
    "end",

    "-- Nested while loops example\n" +
    "local i = 1\n" +
    "while i <= 3 do\n" +
    "    print(\"Outer loop iteration:\" .. i)\n" +
    "    local j = 1\n" +
    "    while j <= 2 do\n" +
    "        print(\"Inner loop iteration:\" .. j)\n" +
    "        j = j + 1\n" +
    "    end\n" +
    "    i = i + 1\n" +
    "end",

    "-- Nested repeat-until loops example\n" +
    "local i = 1\n" +
    "repeat\n" +
    "    print(\"Outer loop iteration:\" .. i)\n" +
    "    local j = 1\n" +
    "    repeat\n" +
    "        print(\"Inner loop iteration:\" .. j)\n" +
    "        j = j + 1\n" +
    "    until j > 2\n" +
    "    i = i + 1\n" +
    "until i > 3",


    "for count = 1, 10 do\n" +
    "end\n" +
    "while true do\n" +
    "end\n" +
    "while not (not false) do\n" +
    "end\n" +
    "for i = 1, 10, 1 do\n" +
    "end\n" +
    "for _, j in ipairs({}) do\n" +
    "end\n" +
    "for index, i in ipairs({}) do\n" +
    "  break\n" +
    "end\n" +
    "for count2 = 1, 10 do\n" +
    "  while true do\n" +
    "    while not (not false) do\n" +
    "      for i = 1, 10, 1 do\n" +
    "        for _, j in ipairs({}) do\n" +
    "          for index, i in ipairs({}) do\n" +
    "            break\n" +
    "          end\n" +
    "        end\n" +
    "      end\n" +
    "    end\n" +
    "  end\n" +
    "end",

    "-- First comment\n" +
    "for exp=1,10,1 do\n" +
    "  -- comment\n" +
    "  repeat\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- comment\n" +
    "  while true do\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "  for i,j in ipairs({}) do\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "  end\n" +
    "  -- comment\n" +
    "  end\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "  until false\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "end\n" +
    "-- comment\n" +
    "for i,j in ipairs({}) do\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "end\n" +
    "-- comment\n" +
    "while true do\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "end\n" +
    "-- comment\n" +
    "repeat\n" +
    "  --\n" +
    "  a = 5 + 6\n" +
    "  -- \n" +
    "  b = math.sqrt(5)\n" +
    "  ---\n" +
    "until false\n" +
    "-- Last comment",

];

/**
 * Test cases for creating new function definitions and calling them
 */
const custom_functions = [
    "function fibonacci(n)\n" +
    "    if n <= 1 then\n" +
    "        return n\n" +
    "    end\n" +
    "\n" +
    "    local a, b = 0, 1\n" +
    "    for i = 2, n do\n" +
    "        local temp = b\n" +
    "        b = a + b\n" +
    "        a = temp\n" +
    "    end\n" +
    "\n" +
    "    return b\n" +
    "end\n",

    "function get_primes(arr)\n" +
    "  local primes = {}\n" +
    "  for i = 1, #arr do\n" +
    "    local num = arr[i]\n" +
    "    if num > 1 then\n" +
    "      local is_prime = true\n" +
    "      for j = 2, math.floor(math.sqrt(num)) do\n" +
    "        if num % j == 0 then\n" +
    "          is_prime = false\n" +
    "          break\n" +
    "        end\n" +
    "      end\n" +
    "      if is_prime then\n" +
    "        table.insert(primes, num)\n" +
    "      end\n" +
    "    end\n" +
    "  end\n" +
    "  return primes\n" +
    "end\n",

    "function get_odd_numbers(arr)\n" +
    "  local odd_numbers = {}\n" +
    "  for i = 1, #arr do\n" +
    "    if arr[i] % 2 ~= 0 then\n" +
    "      table.insert(odd_numbers, arr[i])\n" +
    "    end\n" +
    "  end\n" +
    "  return odd_numbers\n" +
    "end\n",

    "-- Describe this function...\n" +
    "function add2(a, b)\n" +
    "  result = a + b\n" +
    "  if true then \n" +
    "    --\n" +
    "    a = 5 + 6\n" +
    "    -- \n" +
    "    b = math.sqrt(5)\n" +
    "    ---\n" +
    "  elseif 5 * 8 > 9 and false == true then\n" +
    "    --\n" +
    "    p = a\n" +
    "    --------\n" +
    "    s = 5\n" +
    "    ---\n" +
    "  else\n" +
    "     --\n" +
    "    p = a\n" +
    "    --------\n" +
    "    s = 5\n" +
    "    ---\n" +
    "  end\n" +
    "  return result\n" +
    "end\n" +
    "\n" +
    "-- Describe this function...\n" +
    "function foo(a, b, c, d, e, f)\n" +
    "end\n" +
    "\n" +
    "foo(add2(1, 2), a, {}, a[1], (5 + 6 * ((9 + 8) + 7)) - 9, nil)",

    "-- Describe this function...\n" +
    "function aB_5(a, b, c)\n" +
    "  -- first inner comment\n" +
    "  a = b + c\n" +
    "  -- second inner comment\n" +
    "  b = (a * c) / b\n" +
    "  -- last comment\n" +
    "end\n" +
    "\n" +
    "\n" +
    "-- Describe this function...\n" +
    "function aB_5version2(a, b, c)\n" +
    "  -- first inner comment\n" +
    "  a = b + c\n" +
    "  -- second inner comment\n" +
    "  for exp = a, b, c do\n" +
    "    -- comment\n" +
    "    a = 5\n" +
    "    -- comment2\n" +
    "    c = 8\n" +
    "    -- comment3\n" +
    "  end\n" +
    "  -- last comment\n" +
    "  if true then\n" +
    "    -- coment\n" +
    "    return 5\n" +
    "    --comment\n" +
    "  end\n" +
    "  return 5\n" +
    "end"
]

/**
 * Test cases for bigger source codes combining all possible structures
 */
const big = [
    "gridYCount = 1\n" +
    "gridXCount = 2\n" +
    "y_inc = 5\n" +
    "x_inc = 6\n" +
    "grid = {}\n" +
    "\n" +
    "function get_initial_value(x, y)\n" +
    "  return (y - 1) * gridXCount + x\n" +
    "end\n" +
    "\n" +
    "function move(direction)\n" +
    "  y_inc = 1\n" +
    "  if (1) > (gridYCount) then\n" +
    "    y_inc = -y_inc\n" +
    "  end\n" +
    "  for y=1, gridYCount, y_inc do\n" +
    "    x_inc = 1\n" +
    "    if (1) > (gridXCount) then\n" +
    "      x_inc = -x_inc\n" +
    "    end\n" +
    "    for x = 1, gridXCount, x_inc do\n" +
    "      y_list = grid[y]\n" +
    "      if y_list[x] == gridXCount * gridYCount then\n" +
    "        emptyX = x\n" +
    "        emptyY = y\n" +
    "      end\n" +
    "    end\n" +
    "  end\n" +
    "  newEmptyX = emptyX\n" +
    "  newEmptyY = emptyY\n" +
    "  if direction == 'down' then\n" +
    "    newEmptyY = emptyY - 1\n" +
    "  elseif direction == 'up' then\n" +
    "    newEmptyY = emptyY + 1\n" +
    "  elseif direction == 'right'then\n" +
    "    newEmptyX = emptyX - 1\n" +
    "  elseif direction == 'left' then\n" +
    "    newEmptyX = emptyX + 1\n" +
    "  end\n" +
    "  if grid[newEmptyY] then\n" +
    "    new_empty_y_list = grid[newEmptyY]\n" +
    "    empty_y_list = grid[emptyY]\n" +
    "    if new_empty_y_list[newEmptyX] then\n" +
    "      k = new_empty_y_list[newEmptyX]\n" +
    "      i = empty_y_list[emptyX]\n" +
    "      empty_y_list[emptyX] = j\n" +
    "      new_empty_y_list[newEmptyX] = i\n" +
    "    end\n" +
    "  end\n" +
    "end",


    "-- Premenné\n\
    x = 10\n\
    y = 5\n\
    z = 0\n\
    \n\
    -- Podmienka if-else\n\
    if x > y then\n\
    -- koment\n\
        for i = 1, x do\n\
    --\n\
            z = z + i\n\
    --\n\
        end\n\
    --\n\
    else\n\
        -- Cyklus while\n\
        while y > 0 do\n\
    --com\n\
            z = z + y\n\
    --\n\
            y = y - 1\n\
    --c\n\
        end\n\
    -- comment\n\
    end\n\
    -- Funkcia s parametrami a návratovou hodnotou\n\
    function multiply(a, b)\n\
        return a * b\n\
    end\n\
    -- Funkcia ako parameter\n\
    function add(a, b)\n\
        return a + b\n\
    end\n\
    -- Volanie funkcie s návratovou hodnotou\n\
    z = z + multiply(x, y)\n\
    -- Reťazce\n\
    string1 = \"Hello\"\n\
    string2 = \"world!\"\n\
    concatenated_string = string1 .. \", \" .. string2\n\
    -- Definícia funkcie\n\
    function isPrime(number)\n\
        if number <= 1 then\n\
            return false\n\
        elseif number == 2 then\n\
            return true\n\
        else\n\
            for i = 2, math.sqrt(number) do\n\
                if number % i == 0 then\n\
                    return false\n\
                end\n\
            end\n\
            return true\n\
        end\n\
        return false\n\
    end\n\
    -- Volanie funkcie na zistenie prvočísla\n\
    prime = isPrime(4)\n\
    -- Inicializácia tabuľky (pole)\n\
    array = {1, 2, 3, 4, 5}\n\
    -- Cyklus prechádzajúci cez pole a zvyšujúci hodnotu z\n\
    for _, value in ipairs(array) do\n\
        -- Volanie funkcie ako parametra\n\
        z = z + add(z, value)\n\
    end\n\
    -- Výpis výsledkov\n\
    print(\"Výsledok je: \" .. z)\n\
    print(concatenated_string)\n\
    print(\"Je číslo \" .. x .. \" prvočíslo? \" .. prime)",

    "function a(a,b)\n\nend\nfunction foo()\nreturn 5\nend\n\na(1, foo())\
        if true then\n\
            a = 1\n\
        elseif false then\n\
            p = 6\n\
        elseif a>1 then\n\
            if true then\n\
                p = p\n\
            end\n\
            s = 5\n\
        elseif p == s then\n\
            print(a)\n\
        end\n\
        if true then\n\
            p=4\n\
        else\n\
            p = 6\n\
        end\n\
        print(\"a\" , \"l\" ,\"p\")",

    "local message = \"Hello, Lua!\"\
    print(message)",

    "-- Conditional statement\n\
    local num = 10\n\
    if num > 0 then\n\
        print(\"Positive number\")\n\
    elseif num < 0 then\n\
        print(\"Negative number\")\n\
    else\n\
        print(\"Zero\")\n\
    end",

    "-- Looping example\n\
    for i = 1, 5 do\n\
        print(\"Iteration:\", i)\n\
    end",

    "-- Function definition and usage\n\
    function add(a, b)\n\
        return a + b\n\
    end\n\
    \n\
    local result = add(3, 4)\n\
    print(\"Result:\", result)",

    "-- String manipulation example\n\
    local sentence = \"Lua is awesome!\"\n\
    print(\"Length:\", #sentence)\n\
    print(\"Uppercase:\", string.upper(sentence))",

    "-- Module example\n\
    local mymodule = {}\n\n\
    function mymodule.greet(name)\n\
        print(\"Hello,\" .. name)\n\
    end\n\n\
    return mymodule",

    "if true then\n\
        return 6\n\
    end\n\
        \n\
    function foo(a)\n\
        if a > 1 then\n\
            return a + a\n\
        elseif a < 1 then\n\
            return a - a\n\
        else\n\
            return a ^ 3\n\
        end\n\
            return a\n\
        end\n\
        \n\
    return 5",

    "function random_number(min, max)\n" +
    "    return math.random(min, max)\n" +
    "end\n" +
    "\n" +
    "function random_string(length)\n" +
    "    local characters = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\"\n" +
    "    local result = \"\"\n" +
    "    for i = 1, length do\n" +
    "        result = result .. string.sub(characters, random_number(1, #characters), 1)\n" +
    "    end\n" +
    "    return result\n" +
    "end\n" +
    "\n" +
    "function random_boolean()\n" +
    "    return math.random(0, 1) == 1\n" +
    "end\n" +
    "\n" +
    "function random_table(size)\n" +
    "    local t = {}\n" +
    "    for i = 1, size do\n" +
    "        t[i] = random_number(1, 100)\n" +
    "    end\n" +
    "    return t\n" +
    "end\n" +
    "\n" +
    "function random_point(min_x, max_x, min_y, max_y)\n" +
    "    return {random_number(min_x, max_x), random_number(min_y, max_y)}\n" +
    "end\n" +
    "\n" +
    "function random_color()\n" +
    "    return {\n" +
    "        random_number(0, 255),\n" +
    "        random_number(0, 255),\n" +
    "        random_number(0, 255)\n" +
    "    }\n" +
    "end\n" +
    "\n" +
    "function random_date(start_year, end_year)\n" +
    "    local start_date = love.timer.getTime()\n" +
    "    local end_date = love.timer.getTime()\n" +
    "    local random_timestamp = random_number(start_date, end_date)\n" +
    "    return random_timestamp\n" +
    "end\n" +
    "\n" +
    "function random_choice(choices)\n" +
    "    return choices[random_number(1, #choices)]\n" +
    "end\n" +
    "\n" +
    "function random_shuffle(t)\n" +
    "    for i = #t, 2, -1 do\n" +
    "        local j = random_number(1, i)\n" +
    "        t[i], t[j] = t[j], t[i]\n" +
    "    end\n" +
    "    return t\n" +
    "end\n" +
    "\n" +
    "function random_gaussian(mean, stddev)\n" +
    "    local u1 = random_number(0, 1)\n" +
    "    local u2 = random_number(0, 1)\n" +
    "    local z0 = math.sqrt(-2 * math.log(u1)) * math.cos(math.rad(2 * math.pi * u2))\n" +
    "    return mean + stddev * z0\n" +
    "end\n" +
    "\n" +
    "function random_sample(t, n)\n" +
    "    local result = {}\n" +
    "    local indices = random_shuffle(t)\n" +
    "    for i = 1, n do\n" +
    "        result[i] = t[indices[i]]\n" +
    "    end\n" +
    "    return result\n" +
    "end\n" +
    "\n" +
    "function random_weighted_choice(choices, weights)\n" +
    "    local total_weight = 0\n" +
    "    for i = 1, #weights do\n" +
    "        total_weight = total_weight + weights[i]\n" +
    "    end\n" +
    "    local random_weight = random_number(0, total_weight)\n" +
    "    local current_weight = 0\n" +
    "    for i = 1, #weights do\n" +
    "        current_weight = current_weight + weights[i]\n" +
    "        if current_weight >= random_weight then\n" +
    "            return choices[i]\n" +
    "        end\n" +
    "    end\n" +
    "    return choices[#choices]\n" +
    "end\n" +
    "\n" +
    "function random_normal(mean, stddev)\n" +
    "    local u1 = random_number(0, 1)\n" +
    "    local u2 = random_number(0, 1)\n" +
    "    local z0 = math.sqrt(-2 * math.log(u1)) * math.cos(math.rad(2 * math.pi * u2))\n" +
    "    return mean + stddev * z0\n" +
    "end\n" +
    "\n" +
    "function random_exponential(rate)\n" +
    "    local u = random_number(0, 1)\n" +
    "    return -math.log(u) / rate\n" +
    "end\n" +
    "\n" +
    "function random_poisson(lambda)\n" +
    "    local l = math.exp(-lambda)\n" +
    "    local k = 0\n" +
    "    local p = 1\n" +
    "    while p > l do\n" +
    "        k = k + 1\n" +
    "        p = p * random_number(0, 1)\n" +
    "    end\n" +
    "    return k - 1\n" +
    "end\n" +
    "\n" +
    "function random_gamma(shape, scale)\n" +
    "    local x = 0\n" +
    "    for i = 1, shape do\n" +
    "        x = x + random_exponential(1 / scale)\n" +
    "    end\n" +
    "    return x\n" +
    "end\n" +
    "\n" +
    "function random_binomial(n, p)\n" +
    "    local x = 0\n" +
    "    for i = 1, n do\n" +
    "        if random_boolean() < p then\n" +
    "            x = x + 1\n" +
    "        end\n" +
    "    end\n" +
    "    return x\n" +
    "end\n" +
    "\n" +
    "function random_beta(alpha, beta)\n" +
    "    local x = random_gamma(alpha, 1)\n" +
    "    local y = random_gamma(beta, 1)\n" +
    "    return x / (x + y)\n" +
    "end\n" +
    "\n" +
    "function random_weibull(shape, scale)\n" +
    "    local u = random_number(0, 1)\n" +
    "    return scale * -(math.log(u) ^ (1 / shape)\n" +
    "end\n" +
    "\n" +
    "function random_lognormal(mean, stddev)\n" +
    "    local z = random_gaussian(mean, stddev)\n" +
    "    return math.exp(z)\n" +
    "end\n" +
    "\n" +
    "function random_cauchy(location, scale)\n" +
    "    local u1 = random_number(0, 1)\n" +
    "    local u2 = random_number(0, 1)\n" +
    "    return location + scale * math.tan(math.rad(math.pi * (u1 - 0.5)))\n" +
    "end\n" +
    "\n" +
    "function random_pareto(scale, shape)\n" +
    "    local u = random_number(0, 1)\n" +
    "    return scale / u ^ (1 / shape)\n" +
    "end\n" +
    "\n" +
    "function random_zipf(n, s)\n" +
    "    local u = random_number(0, 1)\n" +
    "    local harmonic_n = 0\n" +
    "    for i = 1, n do\n" +
    "        harmonic_n = harmonic_n + 1 / (i ^ s)\n" +
    "    end\n" +
    "    return math.ceil(n / ((u * harmonic_n) ^ (1 / s)))\n" +
    "end"
];

/**
 * Test cases for validating code generated from generated blocks against written code
 */
const both_way_check = [
    "x = (1 + 2) * 3",
    "local a = (1 + 2) * 3",
    "local b = 4 * (5 + 6)",
    "local c = (7 + 8) * (9 - 10)",
    "local d = (11 * c) / (13 + 14)",
    "local e = (15 - 16) * (17 / d)",
    "local f = e / 20 + 21 * 22",
    "local g = (23 + f) / (f - 26)",
"    local h = (27 - 28) / (29 * g)",
    "local i = (h + 32) * (33 / 34)",
    "local j = (i * h) / (g + e)",
    "a = ''",
    "a = 'Hello Lua'",
    "a = 'Hello ' .. 'World'",
    "b = 'World'\na = 'Hello ' .. b",
    "a = 'Hello' .. ''",
    "b = ''\na = 'Hello' .. b",
    "print('string')",
    "local myList = {}",
    "local myList = {1, 2, 3, 4, 5}",
    "local value = myList[3]",
    "myList[2] = 10",
    "local newList = {6, 7, 8}\nlocal combinedList = myList .. newList",
    "table.insert(myList, 6, nil)",
    "table.remove(myList, 3)",
    "local length = #myList",

    "for i = 1, 5, 1 do\n" +
    "    print(\"Iteration\" .. i)\n" +
    "end",
    "numbers = {1, 2, 3, 4, 5}\n" +
    "for index, value in ipairs(numbers) do\n" +
    "    print('Index' .. index .. 'Value' .. value)\n" +
    "end",
    " i = 1\n" +
    "while i <= 5 do\n" +
    "    print('Iteration' .. i)\n" +
    "    i = i + 1\n" +
    "end",
    "for i = 1, 3 do\n" +
    "    print('Outer Iteration' .. i)\n" +
    "    for j = 1, 2 do\n" +
    "        print('Inner Iteration' .. j)\n" +
    "    end\n" +
    "end",
    "local x = 10\n" +
    "if x > 5 then\n" +
    "    print('x je väčšie ako 5')\n" +
    "else\n" +
    "    print('x je menšie alebo rovné 5')\n" +
    "end",
    "local name = 'John'\n" +
    "if name == 'John' then\n" +
    "    print('Meno je John')\n" +
    "else\n" +
    "    print('Meno nie je John')\n" +
    "end",
    "local age = 20\n" +
    "if age >= 18 and not (age > 65) then\n" +
    "    print('Osoba je dospelá, ale nie je dôchodkový vek')\n" +
    "else\n" +
    "    print('Osoba nie je dospelá alebo je dôchodkový vek')\n" +
    "end",

    "function love.draw()\n" +
    "    love.graphics.rectangle(\"fill\", 100, 100, 50, 50)  -- Vykreslenie plného obdĺžnika\n" +
    "end",

    "function love.draw()\n" +
    "    love.graphics.circle(\"line\", 200, 200, 30)  -- Vykreslenie ohraničeného kruhu\n" +
    "end",
    "love.graphics.rectangle(\"fill\", 100, 100, 50, 50)",
    "love.graphics.circle(\"line\", 200, 200, 30)",
    "love.graphics.print(\"Hello, World!\", 300, 300)",
    "love.graphics.setNewFont(24)",
    "love.graphics.setColor(1, 0, 0)",
    "isDown = love.keyboard.isDown(\"right\")",
    "local windowWidth = love.graphics.getWidth()",
    "local windowHeight = love.graphics.getHeight()",
    "local pixelWidth = love.graphics.getPixelWidth()",
    "local pixelHeight = love.graphics.getPixelHeight()",
    "local dimensions = {love.graphics.getDimensions()}",
    "local dpiScale = love.graphics.getDPIScale()",
    "local bgColor = {love.graphics.getBackgroundColor()}",
    "local currentColor = {love.graphics.getColor()}",
    "local pointSize = love.graphics.getPointSize()",
    "local lineWidth = love.graphics.getLineWidth()",
    "function love.directorydropped( joystick )\nend",
    "function love.joystickadded( isrepeat )\nend",
    "function love.joystickpressed( dy, focus )\nend",
    "function love.touchmoved( focus, start, button, direction, isrepeat, visible )\nend",
    "a = love.keyboard.isScancodeDown(file)",
    "b = love.keyboard.isDown(key)",
    "c = love.keyboard.hasTextInput()",
    "d = love.keyboard.hasScreenKeyboard()",
    "e = love.keyboard.hasKeyRepeat()",
    "f = love.keyboard.getScancodeFromKey(Enter)",
    "g = love.keyboard.getKeyFromScancode(Enter)",
    "h = love.touch.getTouches()",
    "i = love.touch.getPressure()",
    "j = love.touch.getPressure(123456789)",
    "k = love.window.getDPIScale()",
    "love.window.close(j)",
    "l = love.window.getFullscreen()",
    "m = love.window.getDisplayName(l * k)",
    "n = love.window.getDisplayOrientation(l * (k + m))",
    "o = love.window.hasFocus()",
    "p = love.window.getTitle()",
    "q = love.window.getPosition()",
    "r = love.window.setMode(1, 5, {})",
    "s = love.window.setFullscreen(true)",
    "t = love.window.isVisible()",
    "u = love.window.isOpen()",
    "v = love.window.isMinimized()",
    "w = love.window.isMaximized()",
    "x = love.window.hasMouseFocus()",
    "y = love.window.getDisplayCount()",
    "z = love.system.openURL('http://localhost/page')",
    "a1 = love.system.getProcessorCount()",
    "a_1 = love.system.getOS()",
    "A = love.system.getClipboardText()",
    "B = love.system.hasBackgroundMusic()",
    "C = love.timer.step()",
    "D = love.timer.getTime()",
    "E = love.timer.getFPS()",
    "F = love.timer.getDelta()",
    "G = love.timer.getAverageDelta()",
    "triangle = {{0,0},{5,5},{0,5}} \na = love.math.triangulate(triangle)",
    "H = love.math.randomNormal()",
    "I = love.math.random(1, 2)",
    "J = love.math.noise(1)",
    "K = love.math.isConvex(1)",
    "L = love.math.getRandomState(1)",
    "M = love.math.getRandomSeed()",
    "N = love.math.newRandomGenerator()",
    "O = love.mouse.newCursor()",
    "P = love.mouse.newCursor('image.png', 1, 2)",
    "Q = love.mouse.isVisible()",
    "R = love.mouse.isGrabbed()",
    "S = love.mouse.isDown(1)",
    "T = love.mouse.getY()",
    "U = love.mouse.getX()",
    "V = love.mouse.getSystemCursor(nil)",
    "W = love.mouse.getRelativeMode()",
    "X = love.mouse.getPosition()",
    "Y = love.mouse.getCursor()",
    "Z = love.physics.newWorld(nil, nil, true)",
    "Z_ = love.physics.newWheelJoint(nil, nil, 365, 1.5, Y)",
    "Z__ = love.physics.newRectangleShape(nil, nil)",
    "Z__Z = love.physics.newPolygonShape(nil)",
    "Z_Z_Z = love.physics.newMouseJoint({}, 1, 2)",
    "_ = love.physics.getDistance({}, {2})",
    "__ = love.physics.getMeter()",
    "_Z_ = love.physics.newBody({}, 1, 2, dynamic)",
    "_Z_ = love.physics.newCircleShape(50)",
    "var = love.physics.newChainShape(true, nil)",
    "var = love.physics.newEdgeShape(1, nil, _)",
    "var = love.physics.newFixture(1, nil, _)",
    "var = love.audio.getDistanceModel()",
    "var = love.audio.setMixWithSystem(true)",
    "var = love.audio.newSource('path', \"stream\")",
    "var = love.audio.isEffectsSupported()",
    "var = love.audio.getVolume()",
    "var = love.audio.getRecordingDevices()",
    "var = love.audio.getPosition()",
    "var = love.audio.getOrientation()",
    "var = love.audio.getMaxSourceEffects()",
    "var = love.audio.getMaxSceneEffects()",
    "var = love.audio.getEffect('path')",
    "var = love.audio.getDopplerScale()",
    "var = love.audio.getActiveSourceCount()",
    "var = love.audio.getActiveEffects()",
    "var = love.audio.pause()",
    "var = love.filesystem.append('path', 'text to\\nappend', 50)",
    "var = love.filesystem.areSymlinksEnabled()",
    "var = love.filesystem.createDirectory('path/to/dir')",
    "var = love.filesystem.getDirectoryItems('path/to/dir')",
    "var = love.filesystem.getIdentity()",
    "var = love.filesystem.getInfo('path/to/dir', \"directory\")",
    "var = love.filesystem.getInfo('path/to/file', \"file\")",
    "var = love.filesystem.getRequirePath()",
    "var = love.filesystem.getRealDirectory('path/to/file')",
    "var = love.filesystem.getSaveDirectory()",
    "var = love.filesystem.getSource()",
    "var = love.filesystem.getUserDirectory()",
    "var = love.filesystem.lines('file_to_loop_over')",
    "var = love.filesystem.load('file_to_load')",
    "var = love.filesystem.mount('file_to_load')",
    "var = love.filesystem.mount('archive', 'mountpoint', true)",
    "var = love.filesystem.read('archive', 6)",
    "var = love.filesystem.remove('archive')",
    "var = love.filesystem.unmount('archive')",
    "var = love.filesystem.write('archive', 'data to write', 1000)",
    "var = create_list_repeated(nil, 1000)",

];

let codeSnippets = {
    "function_calls": function_calls,
    "function_definitions": function_definitions,
    "variables": variables,
    "math": math,
    "text": text,
    "lists": lists,
    "additional": ["#!/usr/local/bin/lua",
        "#!/usr/local/bin/lua\na = 1",
        "-- comment\nif true then a = 1\n-- comm\nend"],
    "logic": logic,
    "loops": loops,
    "custom_functions": custom_functions,
    "big": big,
    "both_way_check": both_way_check
};
