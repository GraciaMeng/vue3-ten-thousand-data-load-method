# vue3-ten-thousand-data-load-method

当我们有十万条数据时，我们可以试着用这些方法尝试渲染。
when we have ten thousand data, we can use these methods to render.

## 1.animate

利用 requestAnimationFrame 这个 api 去分帧渲染数据.

## 2.cut

利用分页的方式去切割数据.

## 3.load

利用触底加载的方式加载数据(同时应用了节流).

## 4.time-animate

利用 requestAnimationFrame 分帧渲染和定时器间隔时间触发 requestAnimationFrame，让一次性分帧不那么卡顿.

## 5.virtual

利用虚拟列表的方式渲染获取数据.
