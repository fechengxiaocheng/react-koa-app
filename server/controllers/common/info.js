module.exports = router => {
  router.get('/common/app_info', async ctx => {
    ctx.body = {
      code: 0
    }
  })
}
