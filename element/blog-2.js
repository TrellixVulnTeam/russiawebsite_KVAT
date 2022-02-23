import BlogSlider2 from "../component/blogSlider-2";


function Blog2({blogData}) {
  return (
    <>
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg16.png)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">مقالات ما</h6>
					<h2 className="title">اخرین مقالات</h2>
				</div>
				<BlogSlider2 blogData={blogData}/>
			</div>
		</section>
    </>
  )
}

export default Blog2;