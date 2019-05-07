const exec = require('child_process').exec

const file = './source.png'
const water = './water.png'
const command = `
convert -resize 800 ${file} ${file} && composite -geometry +200+200 -dissolve 30 ${water} ${file} ${file}
`

async function image(command) {
  const { stdout, stderr } = await exec(command)
  if (stderr._hadError) {
    console.log('出错了', stderr)
  } else {
    console.log('成功', stdout)
  }
}
image(command);