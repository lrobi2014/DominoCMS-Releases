﻿DominoViews.registerView( 'Domino.Admin.Entry.List.Field.Varchar', function( data ) {	"use strict";	var linkType = "";    /*if ( data.options )        if ( data.options.link ) {            if ( data.options.link == 'returnEntry' )                var linkType = "returnEntry";        }*/	//if ( data.column.clickable == 1 && data.link )	//	return <div><a href={ data.link } name={ linkType } data-val={ data.entry }>{ data.data }</a></div>	//else		return <span name={ linkType } data-val={ data.entry }>{ data.data }</span>});