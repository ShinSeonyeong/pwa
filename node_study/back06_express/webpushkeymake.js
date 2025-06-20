const webpush = require('web-push')

const vapidKeys = webpush.generateVAPIDKeys()
console.log(vapidKeys); // 키 값 생성

/*
{
  publicKey: 'BCLqkY-h2mN70TTB7611ZFJ_WhtoENg2GnO7Mit-hd4GbzTnclbB-yFpVfSPaLSDUVqiP8_B8ah5YlH3Ri9FXJ4',
  privateKey: 'wqYaS18G1c9wMlh3ehMV-oEvbwcB9H8TY2gvQeSxM6s'
}
*/