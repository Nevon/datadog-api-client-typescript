const Case = require('case');

const customGenerator = ({
    componentName,
    verb,
    route,
    description,
    genericsTypes
}) => {
    // Based on example in
    // https://github.com/contiamo/restful-react/pull/229
    // useGet
    if (verb === 'get') {
        const [responseType, , queryParamsType] = genericsTypes.split(', ');
        const exportName = `${Case.camel(componentName)}Promise`;
        const componentBody = `(props: ${queryParamsType}) => HttpGET<${responseType}, ${queryParamsType}>('${route}', { qsStringifyOptions: { arrayFormat: 'brackets' } })(props)`;
        return `${description}export const ${exportName} = ${componentBody};\n\n`;
    }

    if (verb === 'post') {
        const [responseType, , , requestBodyType] = genericsTypes.split(', ');
        const exportName = `${Case.camel(componentName)}Promise`;
        const propsName = `${Case.pascal(exportName)}Props`;
        // HttpPost will automatically supply authentication, no need to make the caller send it through
        const propsValue = `Omit<${requestBodyType}, "_authentication_token">`;
        const componentBody = `(props: ${propsName}) => HttpPOST<${responseType}, ${propsName}>('${route}')(props)`;
        return `export type ${propsName} = ${propsValue};\n${description}export const ${exportName} = ${componentBody};\n\n`;
    }

    // Add support for other verbs as needed.
    console.warn(
        `A custom promise was not generated for endpoint with type ${verb}, see restful-react.config.js to add code for your custom type`
    );
    return '';
};

const SCHEMAS_ROOT = '.generator/schemas'

module.exports = {
    v1: {
        output: `/restful-client/v1.tsx`,
        file: `${SCHEMAS_ROOT}/v1/openapi.yaml`,
        customGenerator
    },

    v2: {
        output: `/restful-client/v2.tsx`,
        file: `${SCHEMAS_ROOT}/v2/openapi.yaml`,
        customGenerator
    }
};
