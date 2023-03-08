// Questão 2

<script>
function isFibonacci(n) {
  (a = 5 * Math.pow(n, 2) + 4), (b = 5 * Math.pow(n, 2) - 4);

  var result = Math.sqrt(a) % 1 == 0,
    res = Math.sqrt(b) % 1 == 0;

  if (result || res == 0) {
    console.log('Pertence a sequência Fibonacci');
  } else {
    console.log('Não pertence a sequência Fibonacci');
  }
}

isFibonacci(25);


</script>


// Questão 5

<script>
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("Target");

</script>
