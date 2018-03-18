﻿DominoViews.registerView( 'Domino.Installer.Success', function( data ) {	"use strict";	return <div class="domino-installer">        <div class="welcome">            <div class="in">                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyODMuNSA1Ni43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODMuNSA1Ni43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzFENzFCODt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTExMy45LDMyLjZjMCw1LjYtNC4zLDkuOC0xMC4xLDkuOGMtNS44LDAtMTAtNC4yLTEwLTkuOGMwLTUuNiw0LjMtOS44LDEwLTkuOAoJCQlDMTA5LjYsMjIuOCwxMTMuOSwyNywxMTMuOSwzMi42eiBNOTguOSwzMi42YzAsMywyLjEsNS4xLDQuOSw1LjFjMi44LDAsNS0yLjEsNS01LjFjMC0zLTIuMS01LjEtNS01LjEKCQkJQzEwMSwyNy40LDk4LjksMjkuNiw5OC45LDMyLjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0Mi43LDMwdjExLjloLTVWMzEuNmMwLTIuNy0xLjQtNC4yLTMuNi00LjJjLTIuMiwwLTMuOSwxLjQtMy45LDQuMnYxMC4yaC01VjMxLjZjMC0yLjctMS4zLTQuMi0zLjYtNC4yCgkJCWMtMi4xLDAtMy45LDEuNC0zLjksNC4ydjEwLjJoLTVWMjMuM2g0Ljl2Mi4yYzEuMy0yLDMuNC0yLjcsNS41LTIuN2MyLjcsMCw0LjksMS4yLDYuMSwzLjJjMS40LTIuNCwzLjktMy4yLDYuMy0zLjIKCQkJQzEzOS43LDIyLjgsMTQyLjcsMjUuNywxNDIuNywzMHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ5LjEsNDEuOWgtNVYyMy4zaDVWNDEuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTY4LjUsMzB2MTEuOWgtNVYzMS42YzAtMi43LTEuMy00LjItMy42LTQuMmMtMi4xLDAtMy45LDEuNC0zLjksNC4ydjEwLjJoLTVWMjMuM2g0Ljl2Mi4yCgkJCWMxLjMtMiwzLjQtMi43LDUuNS0yLjdDMTY1LjUsMjIuOCwxNjguNSwyNS43LDE2OC41LDMweiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODgsMzIuNmMwLDUuNi00LjMsOS44LTEwLjEsOS44Yy01LjgsMC0xMC00LjItMTAtOS44YzAtNS42LDQuMy05LjgsMTAtOS44QzE4My43LDIyLjgsMTg4LDI3LDE4OCwzMi42egoJCQkgTTE3MywzMi42YzAsMywyLjEsNS4xLDQuOSw1LjFjMi44LDAsNS0yLjEsNS01LjFjMC0zLTIuMS01LjEtNS01LjFDMTc1LjEsMjcuNCwxNzMsMjkuNiwxNzMsMzIuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODIsMTVINzAuOXYyMS4zbDUuNC0zLjlWMjBIODJjNS43LDAsOC40LDMuNSw4LjQsOC40YzAsNC45LTIuNyw4LjQtOC40LDguNGgtNC40bC02LjcsNUg4MgoJCQljOC40LDAsMTQtNS4zLDE0LTEzLjRTOTAuNCwxNSw4MiwxNXoiLz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDkuOCwxOC4yYzAsMS44LTEuNCwzLjItMy4yLDMuMmMtMS44LDAtMy4yLTEuNC0zLjItMy4yYzAtMS44LDEuNC0zLjIsMy4yLTMuMgoJCUMxNDguNCwxNSwxNDkuOCwxNi40LDE0OS44LDE4LjJ6Ii8+CjwvZz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTYzLjcsMTguMUM2MCw3LjksNDQuMyw0LjMsMjguNiwxMEMxMi44LDE1LjcsMy4xLDI4LjYsNi44LDM4LjhDMTAuNSw0OSwyNi4zLDUyLjYsNDIsNDYuOQoJQzU3LjcsNDEuMiw2Ny40LDI4LjMsNjMuNywxOC4xeiBNMzYuOSw0MS44aC0xMWw2LjYtNWg0LjNjNS42LDAsOC40LTMuNSw4LjQtOC40YzAtNC45LTIuNy04LjQtOC40LTguNGgtNS42djEyLjNsLTUuMywzLjlWMTUuMWgxMQoJYzguNCwwLDEzLjksNS4zLDEzLjksMTMuNEM1MC44LDM2LjUsNDUuMyw0MS44LDM2LjksNDEuOHoiLz4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjc0LDIxLjdjLTEuOSwwLTMuNC0xLjUtMy40LTMuNGMwLTEuOSwxLjUtMy40LDMuNC0zLjRzMy40LDEuNSwzLjQsMy40QzI3Ny41LDIwLjEsMjc1LjksMjEuNywyNzQsMjEuN3oKCQkgTTI3NCwxNS4zYy0xLjYsMC0yLjksMS4zLTIuOSwyLjlzMS4zLDIuOSwyLjksMi45czIuOS0xLjMsMi45LTIuOVMyNzUuNiwxNS4zLDI3NCwxNS4zeiIvPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3Mi43LDE2LjVoMS42YzAuMiwwLDAuNCwwLDAuNiwwLjFjMC4yLDAuMSwwLjMsMC4xLDAuNCwwLjNjMC4xLDAuMSwwLjIsMC4yLDAuMiwwLjNjMCwwLjEsMC4xLDAuMywwLjEsMC40CgkJCXYwYzAsMC4xLDAsMC4zLTAuMSwwLjRjMCwwLjEtMC4xLDAuMi0wLjIsMC4zYy0wLjEsMC4xLTAuMiwwLjItMC4zLDAuMmMtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFsMC45LDEuM2gtMC43bC0wLjktMS4yaDBoLTAuOAoJCQlWMjBoLTAuNlYxNi41eiBNMjc0LjIsMTguMmMwLjIsMCwwLjQtMC4xLDAuNS0wLjJzMC4yLTAuMiwwLjItMC40djBjMC0wLjItMC4xLTAuMy0wLjItMC40Yy0wLjEtMC4xLTAuMy0wLjEtMC41LTAuMWgtMC45djEuMgoJCQlIMjc0LjJ6Ii8+Cgk8L2c+CjwvZz4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjE0LjgsMjAuMWwtMy42LDIuNGMtMS42LTIuNC00LjMtMy45LTcuNS0zLjljLTUuNSwwLTkuNSw0LTkuNSw5LjhzNCw5LjgsOS41LDkuOGMzLjIsMCw1LjgtMS40LDcuNS0zLjkKCQlsMy41LDIuNmMtMi4zLDMuNC02LjMsNS40LTExLDUuNGMtOC4zLDAtMTQuMS01LjktMTQuMS0xMy45YzAtOCw1LjgtMTMuOSwxNC4xLTEzLjlDMjA4LjQsMTQuNSwyMTIuNywxNi42LDIxNC44LDIwLjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjQ1LjUsNDEuOWgtNC4zVjE5LjhsLTcuOSwxOS41aC00LjZMMjIwLjksMjB2MTQuNGwtNC4zLTMuOVYxNWg2LjdsNy44LDE5LjJsNy44LTE5LjJoNi43VjQxLjl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjY2LjgsMjFjLTIuMy0xLjUtNC44LTIuMy03LjUtMi4zYy0zLjYsMC02LDEuNi02LDRjMCwyLjIsMi4xLDMuMSw1LjYsMy42bDEuOSwwLjJjNC40LDAuNiw4LjcsMi40LDguNyw3LjQKCQljMCw1LjUtNSw4LjUtMTAuOCw4LjVjLTMuNiwwLTgtMS4yLTEwLjgtMy42bDIuNC0zLjVjMS44LDEuNyw1LjMsMyw4LjQsM2MzLjUsMCw2LjMtMS41LDYuMy00YzAtMi4xLTIuMS0zLjEtNi0zLjZsLTIuMS0wLjMKCQljLTQtMC42LTgtMi40LTgtNy40YzAtNS40LDQuOC04LjQsMTAuNi04LjRjMy45LDAsNywxLjEsOS43LDIuOUwyNjYuOCwyMXoiLz4KPC9nPgo8L3N2Zz4K" alt="" style="max-width:300px;width:100%;" />                <h1>Success!</h1>                <p>Your DominoCMS is all set up! Now you can procceed to the DominoCMS Panel or see the website.</p>                <p>Don't forget to delete the /install directory!</p>                <p>                    <a button class="button" href="/domino" target="_blank">Go to DominoCMS panel</a>                    <a button class="button" href="/">Preview website</a>                </p>            </div>        </div>    </div>;} );