﻿DominoViews.registerView( 'Domino.Admin.Entry.Edit.Field.HorizontalBar', function( data ) {	"use strict";	return <div class="domino-entryedit-horizontalbar grid-x grid-padding-x">{ (function () {	var ret = [];	for (var i = 0; i < data.children.length; i++) {		var componentData = data.children[i];		componentData['dimensions'] = data.dimensions;		componentData['horizontal'] = true;		if ( componentData.elementItem == 'Date' || componentData.elementItem == 'Time' || componentData.elementItem == 'DateTime' || componentData.elementItem == 'Bool'  )			var cls = "small-6 medium-2 large-2 cell end";		else			var cls = "small-12 medium-3 large-4 cell end";		ret.push(<div class={ cls }>			<component view={ 'Domino.Admin.Entry.Edit.Field.' + componentData.elementItem } componentData={ componentData } />			</div>		);	}		return ret;	})() }</div>});