# Node.js 给图片添加水印

在网上找了很多添加水印的方法，主要都是用 `images` 和 `gm` 这两个包，不过兼容性都不行， `gm` 使用方法相对来说比较复杂，这里用的两种实现方式

- index.js 使用 `images` 这个包，操作很方便，可惜在 `linux` 平台上兼容性不是很好，我在 `Centos7` 上使用的时候会依赖库报错，并且不好解决
- index2.js 是我自己的解决方案，使用 `ImageMagick` 这个命令，直接调用命令处理

# ImageMagick

安装方法

**MAC**

```bash
brew install imagemagick
```

**Centos**

```bash
yum install ImageMagick -y
```
