//CREATE

$('#create-submit').off( );
$('#create-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jdo'; //Use your own!
    var name = $('#create-name').val();
    var age = $('#create-age').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  name: name,
                  age: age
              },
        success: logCreateResult,
        error: logAjaxError
    } );
} );

function logCreateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}



//READ - list

var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
var collection = 'jdo'; //Use your own!

$.ajax( baseUrl + collection,
{
    method: 'GET',
    success: logListResult,
    error: logAjaxError
} );

function logListResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}



//READ - single items?

$('#read-submit').off( );
$('#read-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'danderson'; //Use your own!
    var id = $('#read-id').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'GET',
        success: logReadResult,
        error: logAjaxError
    } );
} );

function logReadResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}



//UPDATE

$('#update-submit').off( );
$('#update-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jdo'; //Use your own!
    var id = $('#update-id').val();
    var name = $('#update-name').val();
    var age = $('#update-age').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'PUT',
        data: {
                  name: name,
                  age: age
              },
        success: logUpdateResult,
        error: logAjaxError
    } );
} );

function logUpdateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}



//DELETE

$('#delete-submit').off( );
$('#delete-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'jdo'; //Use your own!
    var id = $('#delete-id').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'DELETE',
        success: logDeleteResult,
        error: logAjaxError
    } );
} );

function logDeleteResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}