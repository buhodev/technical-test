<script>
    export let title;
    export let description;
    export let ctaText;
    export let ctaLink;
    export let imageSrc;
    export let imageAlt;
  </script>
<section >
    <div class="w-full h-full inset-0 absolute blur-3xl pointer-events-none hidden" style="background:linear-gradient(202.72deg, rgba(237, 78, 139, 0.1) 14.76%, rgba(152, 103, 240, 0.09) 34.37%, rgba(152, 103, 240, 0) 86.62%, rgba(0, 0, 255, 0.1) 100%)"></div>
    <div class="flex max-md:flex-col items-center px-6 lg:px-12 py-20 gap-8 max-w-7xl m-auto z-10">
        <div class="flex flex-col basis-3/5 gap-3 md:gap-6">
            <h2 class="text-2xl xl:text-4xl font-bold text-white">{title}</h2>
            <p class="text-pretty text-base xl:text-xl text-gray-300">{description}</p>
          <slot></slot>
            <div class="flex pt-4">
                <a href={ctaLink} class="btn">{ctaText}</a>
            </div>
        </div>
            <div class="max-w-xl flex justify-end">
                <img src={imageSrc} alt={imageAlt} class="max-w-3xl max-xl:w-full  ">
            </div>
    </div>
    
</section>