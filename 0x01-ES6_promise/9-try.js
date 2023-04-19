/* accept a function as an argument and return an array */

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
    queue.push('Guardrail was proccessed');
    return queue;
  } catch (e) {
    queue.push(e.toString());
    queue.push('Guardrail was proccessed');
    return queue;
  }
}
