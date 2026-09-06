Option Explicit

Dim shell, fso, serverDir, serverCommand, consoleUrl, edgePath, browserCommand
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

serverDir = fso.GetParentFolderName(WScript.ScriptFullName)
serverCommand = "cmd.exe /c cd /d """ & serverDir & """ && node server.js"
shell.Run serverCommand, 0, False
WScript.Sleep 700
consoleUrl = "http://127.0.0.1:4317/console"
edgePath = shell.ExpandEnvironmentStrings("%ProgramFiles(x86)%") & "\Microsoft\Edge\Application\msedge.exe"
If Not fso.FileExists(edgePath) Then edgePath = shell.ExpandEnvironmentStrings("%ProgramFiles%") & "\Microsoft\Edge\Application\msedge.exe"

If fso.FileExists(edgePath) Then
	browserCommand = """" & edgePath & """ --app=" & consoleUrl & " --window-size=1200,600"
	shell.Run browserCommand, 1, False
Else
	shell.Run consoleUrl, 1, False
End If
