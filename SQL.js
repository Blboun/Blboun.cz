//databázový odkaz
var db = null;
//vytvoří připojení k lokální DB
pripojitkDB = function();
{
db=window.open.database("poznamky_awesomeco" , "1.0" , "Databáze a poznámky AwesomeCo" , 1024-1024*3);
};

vytvorTabulkuPoznamky = function();
{
db.transaction(function(tx) {
tx.executesql(
"CREATE TABLE poznamky (id INTEGER \
PRIMARY KEY, nazav TEXT, poznamka TEXT)", [],
function(){ alert("tabulka Poznamky byla uspesne vytvorena!" );},
function(tx, chyba){ alert(chyba.message); } );
});
}
