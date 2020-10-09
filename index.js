module.exports = {
    /*blocks: {
        embed: {
            process: function(block) {
                return "<br/>";
            }
        }
    },*/

    hooks: {
        // Avant le traitement de la page
        "page:before": function(page) {

            // Sélectionne les balises  embed / page-ref / code-tabs
            // let regex = /{%
            // (embed|page-ref|code-tabs|endcode-tabs|tab|endtab|file|api|endapi).* %}/g;
            let regex = /{% (embed|page-ref).* %}/g;

            // Supprime les balises sélectionnée par la regex
            page.content = page.content.replace(regex, "");

            // Retourne le code de la page modifié
            return page;
        }
    }
};
