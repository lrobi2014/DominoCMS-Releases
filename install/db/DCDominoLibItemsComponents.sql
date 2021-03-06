
CREATE TABLE IF NOT EXISTS `DCDominoLibItemsComponents` (
  `developer` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `DCDominoLibItemsComponents` (`developer`, `item`, `filename`, `type`, `order`, `status`) VALUES
('Domino', 'App', 'DominoApp', 'js', 17, 1),
('Domino', 'DominoFont', 'v108', 'pub', 8, 1),
('Domino', 'App', 'lib/DCComponent', 'js', 10, 1),
('Domino', 'App', 'lib/DCController', 'js', 18, 1),
('Domino', 'App', 'lib/DCFiber', 'js', 1, 1),
('Domino', 'App', 'lib/DCLoader', 'js', 2, 1),
('Domino', 'App', 'lib/DCPromise', 'js', 4, 1),
('Domino', 'App', 'lib/sjcl', 'js', 5, 0),
('Domino', 'App', 'lib/DCSignal', 'js', 7, 1),
('Domino', 'App', 'lib/DCDirector', 'js', 18, 1),
('Domino', 'App', 'lib/DCRouteHandlerComponent', 'js', 12, 1),
('Domino', 'App', 'lib/DCPolyfill', 'js', 11, 1),
('Domino', 'App', 'lib/DCUtil', 'js', 16, 1),
('Domino', 'App', 'lib/DCViewUtils', 'js', 15, 1),
('Domino', 'App', 'lib/DCControllerUtils', 'js', 18, 1),
('Domino', 'App', 'lib/DCIndexController', 'js', 20, 1),
('Domino', 'App', 'lib/DCMain', 'js', 21, 1),
('Domino', 'App', 'lib/DCBobril', 'js', 19, 1),
('Domino', 'App', 'lib/DCComponentUtils', 'js', 8, 1),
('dbushell', 'pikaday', 'pikaday', 'js', 10, 1),
('moment', 'momentjs', 'moment', 'js', 10, 1),
('CodeMirror', 'CodeMirror', 'lib/codemirror', 'js', 1, 1),
('CodeMirror', 'CodeMirror', 'lib/codemirror', 'css', 10, 1),
('CodeMirror', 'CodeMirror', 'mode/css/css', 'js', 2, 1),
('CodeMirror', 'CodeMirror', 'mode/jsx/jsx', 'js', 3, 0),
('CodeMirror', 'CodeMirror', 'mode/javascript/javascript', 'js', 10, 1),
('CodeMirror', 'CodeMirror', 'mode/php/php', 'js', 10, 1),
('CodeMirror', 'CodeMirror', 'mode/xml/xml', 'js', 2, 1),
('CodeMirror', 'CodeMirror', 'mode/http/http', 'js', 2, 1),
('CodeMirror', 'CodeMirror', 'mode/sql/sql', 'js', 4, 1),
('CodeMirror', 'CodeMirror', 'mode/sass/sass', 'js', 2, 1),
('CodeMirror', 'CodeMirror', 'mode/htmlmixed/htmlmixed', 'js', 2, 0),
('CodeMirror', 'CodeMirror', 'mode/htmlembedded/htmlembedded', 'js', 2, 0),
('CodeMirror', 'CodeMirror', 'mode/nginx/nginx', 'js', 2, 1),
('CodeMirror', 'CodeMirror', 'mode/clike/clike', 'js', 2, 1),
('jaredreich', 'pell', 'pell', 'js', 0, 1);