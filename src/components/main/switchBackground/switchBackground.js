import conditions from './conditions.json'
function switchBackground(id){
    const array = conditions.data
    const condition = array.filter(x => x.id === id).map(x => x.condition);
    console.log(condition[0])

    return condition[0]
}

export default switchBackground