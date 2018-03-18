﻿DominoViews.registerView( 'Domino.ContentBlocks.Types.BgPic', function( data ) {	"use strict";	var cls = data.class ? data.class : '';	var theme = data.theme ? 'domino-contentblocks ' + data.theme + ' ' + cls : 'domino-contentblocks white' + ' ' + cls;	if ( data.picsCover )		var styl = 'background-image:url(' + data.picsCover[0].filename + ');';	else		var styl = '';	if ( data.containerCol || data.container )		return <div class={ theme } style={ styl }>				<div class={ data.container }>					<div class={ data.containerCol }>						{ (function () {							var ret2 = [];							if ( data.name )								ret2.push(<h2>{ data.name }</h2>);							if ( data.subtitle )								ret2.push(<h3>{ data.subtitle }</h3>);							return ret2;						})() }						{ DCUtil.displayHtml(data.content ) }					</div>			</div>		</div>;	else        return <div class={ theme } style={ styl }>				{ (function () {					var ret2 = [];					if ( data.name )						ret2.push(<h2>{ data.name }</h2>);					if ( data.subtitle )						ret2.push(<h3>{ data.subtitle }</h3>);					return ret2;				})() }				{ DCUtil.displayHtml( data.content ) }        </div>;});