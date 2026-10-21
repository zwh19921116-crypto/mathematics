Option Explicit

Dim shell, fso, serverDir, serverCommand, appUrl, edgePath, browserCommand
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

serverDir = fso.GetParentFolderName(WScript.ScriptFullName)
serverCommand = "cmd.exe /c cd /d """ & serverDir & """ && npm run dev"
shell.Run serverCommand, 0, False
WScript.Sleep 1400

appUrl = "http://127.0.0.1:3000"
edgePath = shell.ExpandEnvironmentStrings("%ProgramFiles(x86)%") & "\Microsoft\Edge\Application\msedge.exe"
If Not fso.FileExists(edgePath) Then edgePath = shell.ExpandEnvironmentStrings("%ProgramFiles%") & "\Microsoft\Edge\Application\msedge.exe"

If fso.FileExists(edgePath) Then
	browserCommand = """" & edgePath & """ --app=" & appUrl & " --window-size=1260,820"
	shell.Run browserCommand, 1, False
Else
	shell.Run appUrl, 1, False
End If
