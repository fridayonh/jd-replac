/*
京喜农场 Tokens
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
// 每个账号 token 是一个 json，示例如下
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [
  '',//账号一的京喜农场token
  '{"farm_jstoken":"c3c1bab9cb6f161526c7f28dcde15e44","phoneid":"5cb2b51f3f0944502887df49d2b38a436d64bb72","timestamp":"1612248140108","pin":"15730703300_p"}',//账号二的京喜农场token,
  '',
  '{"farm_jstoken":"2874faa6e06369b43ba8439024cb56f8","phoneid":"5cb2b51f3f0944502887df49d2b38a436d64bb72","timestamp":"1612247693703","pin":"jd_OozQKNjSAlUw"}']
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
