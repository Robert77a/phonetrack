/**
 * Trigger handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {number} event.meta.lastReqAt - Last task handle timestamp.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json configuration_fields.
 *
 * @returns {Promise} Promise object represents an array of resources to handle.
 */
exports.handle = function(plg, event) {
    const url = `${event.meta.baseURI}/${event.input.rest_hook_config.create.method_name}`;
    const headers = {
        Authorization: `Bearer ${event.auth.api_key}`
    };

    return plg.axios({
        method: event.input.rest_hook_config.create.verb,
        url: url,
        headers: headers,
        data: Object.assign(event.input.rest_hook_config.create.params, {
            target_url: "https://safe-ocean-53721.herokuapp.com/131p3wz1"
        })
    }).then((res) => res.data);
};
