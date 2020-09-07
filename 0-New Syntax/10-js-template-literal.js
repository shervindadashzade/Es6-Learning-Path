// backtracks is use for strings now in es6 and has its benefits as:
//  Multiline String
//  Use Variables In String
//  HTML Escaping
//  you can easily use ' " in your string
let str1 = `hi this is "SHERVIN" talks to you guys`;
//  for use ` in your string you should use \` for this backtrackers
let str2 = `in es6 you can use \` for your strings`;
// multiline example
let str3 = `this is a
multi line string`;
//html escaping example:
let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};
// intersting syntax below
let {title, excerpt, body, tags} = post;
var postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
</footer>`;
//tagged template
function format(literals, ...substitutions) {
    let result = '';

    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result;
}

let quantity = 9,
    priceEach = 8.99,
    result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;

console.log(result); // 9 items cost $80.91.
