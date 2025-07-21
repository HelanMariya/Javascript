function displayContent(content)
{
    result.value +=content
}
// clear screen
function calcScreenclear()
{
    result.value=""
}
// calculate result
function calOutput()
{
    result.value=eval(result.value)
}
// remove last digit()
function remove()
{
    result.value=result.value.slice(0,-1)
}