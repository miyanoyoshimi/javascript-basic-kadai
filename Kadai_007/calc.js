const num = 30;

//変数の宣言 3と5の倍数なら
if(num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です。')
}

//変数の宣言 3の倍数なら
else if (num % 3 == 0) {
  console.log('3の倍数です')
}

//変数の宣言 5の倍数なら
else if (num % 5 == 0) {
  console.log('5の倍数です')
}

//それ以外
else {
  console.log(num)
}