﻿DominoViews.registerView( 'Domino.Admin.Entry.List.Field.Edit', function( data ) {	"use strict";		return <div>			<a href={ data.data.createBefore } title="Create new before" class="edit">				<span class="icon-arrow_up"></span>			</a>			<a href={ data.data.createAfter } title="Create new after" class="edit">				<span class="icon-arrow_down"></span>			</a>            { (function () {                var ret = [];               	if ( data.data.createInto )               		ret.push(<a href={ data.data.createInto } title="Create new into" class="edit">                        <span class="icon-arrow_right"></span>                    </a>);                return ret;            })() }			<a href={ data.link } title="Edit" data-val={ data.entry } class="edit">				<span class="icon-edit"></span>			</a>		</div>});