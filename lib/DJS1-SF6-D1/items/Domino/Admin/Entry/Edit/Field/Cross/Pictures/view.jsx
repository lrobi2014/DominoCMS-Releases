﻿DominoViews.registerView( 'Domino.Admin.Entry.Edit.Field.Cross.Pictures', function( data ) {	"use strict";	if ( !data.data.entries ) {		return <div id="pictures">			<p>Najprej dodajte vnos in potem lahko dodajate slike.</p>		</div>	}	else		return <div id="pictures">			<div class="grid-x grid-padding-x field">				<div class="small-12 medium-3 large-2 cell">					<span class="title">Pictures</span>				</div>				<div class="small-12 medium-9 large-4 end cell">					<input type="file" id="filesPictures" name="pics" value="" placeholder="" multiple />				</div>			</div>			<div class="grid-x grid-padding-x field">				<div class="small-12 medium-3 large-2 cell">				</div>				<div class="small-12 medium-9 large-4 end cell">					<button class="button" id="picUploadButton">Nalož</button>				</div>			</div>			<div class="grid-x grid-padding-x field">				<div class="small-12 medium-3 large-2 cell">					<component view="Domino.Admin.Entry.Selector" componentData={ data.data.miniSelector } />				</div>				<div class="small-3 medium-3 end cell">					<input type="text" name="newEntry" value="Domino.Pictures." placeholder="" />				</div>				<div class="small-3 medium-1 end cell">					<input type="text" name="newProfile" value="" placeholder="Profile" />				</div>				<div class="small-3 medium-1 end cell">					<input type="text" name="newCover" value="" placeholder="Cover" />				</div>				<div class="small-3 medium-2 end cell">					<button class="button" id="manualCross">Povež</button>				</div>			</div>		<div id="PicturesHolder">			{ (function () {				var entries = [];				if ( data.data )					for ( var i = 0; i < data.data.entries.length; i++ ) {						var entry = data.data.entries[i];						entries.push(<div class="grid-x grid-padding-x field">							<div class="small-6 medium-3 large-2 cell">								<a href={ data.data.crossLink + entry.entryRel } target="_blank"><span class="title">{ entry.entryRel }</span></a>							</div>							<div class="small-6 medium-9 large-10 cell">								<a class="deletePicture" href={ entry.entryRel }><span class="icon icon-delete"></span></a>							</div>						</div>);					}				return entries;			})() }		</div>	</div>});