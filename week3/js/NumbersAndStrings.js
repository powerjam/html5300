(function() {
'use strict';
//=============================================================================

var numbers = [];
var count = 0;
var sum = 0;
var average;
  
var words;
var wordCount;

DisplayStats( );

$('#submit').on( 'click', processForm );
$('#reset').on( 'click', reset );
$('#the-number').on( 'focus', clearMessage );

//=============================================================================

function processForm( evt ) {
    var val = $('#the-number').val();
    var num = parseFloat( val );
    if ( isNaN( num ) ) {
        showMessage( 'Sorry, that is not a number I understand.' );
    } else {
        processNumber( num );
    }
    evt.preventDefault( );
}

//=============================================================================

function processNumber( number ) {
    numbers.push( number );
    ComputeStats( );
    DisplayStats( );
}

//=============================================================================

function ComputeStats( ) {
    var i;
    var sum2 = 0;
    var diff;
    var variance;

    count = numbers.length;

    sum = 0;
    for ( i = 0; i < count; ++i ) {
        sum += numbers[ i ];
    }

    if ( count > 0 ) {
        average = sum / count;
    } else {
        average = undefined;
    }
}

//=============================================================================

function DisplayStats( ) {
    displayValue( '#count', count );
    displayValue( '#sum', sum );
    displayValue( '#average', average );

    //-------------------------------------------------------------------------

    function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }
}

//=============================================================================

//=============================================================================

function computeWords(){
  //testtttttttttttttttttttttttttttttttttttttttt
  //array.join <-- method to use for joining/concatenating strings???
  document.getElementById('userText').value
  
  //detect value type of userText
  
  //if userText = number, calculate stats
  //else (if userText = text), concatenate words AND count words per word occurrence
  
}
  
//=============================================================================

//=============================================================================

function reset( ) {
    numbers = [];
    ComputeStats( );
    DisplayStats( );
}

//=============================================================================

function showMessage( msg ) {
    $('#message' ).text( msg );
}

//-----------------------------------------------------------------------------

function clearMessage( ) {
    $('#message' ).text( '' );
}

//=============================================================================
})();