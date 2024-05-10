// middleware/paramsMiddleware.js
module.exports = (req, res, next) => {
    const { param1, param2, param3 } = req.params;
  
    // 参数处理逻辑...
    console.log('Received params:', { param1, param2, param3 });
    req.params = { param1, param2, param3 }; // 如果需要，添加到req对象中
    next();
  };


  