/** 
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다.(catch)
 */

function runner(){
    console.log('Hello');
    
    throw new Error('Error가 발생하였습니다. ');

    console.log('Code Factory');
}
runner();
