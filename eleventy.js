module.exports = function(eleventyConfig) {
    // 1. Passthrough Copy (misalnya folder 'images')
    eleventyConfig.addPassthroughCopy("images"); 

    // 2. Membuat Collection 'posts' dari folder posts/
    eleventyConfig.addCollection("posts", function(collection) {
        // Mengambil semua file .md dari folder posts/
        return collection.getFilteredByGlob("posts/*.md");
    });
    
    // 3. Menambahkan Filter Date (untuk memformat tanggal)
    eleventyConfig.addFilter("date", function(dateObj) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // Mengubah format tanggal ke Bahasa Indonesia (20 November 2025)
        return new Date(dateObj).toLocaleDateString('id-ID', options);
    });

    // 4. Menambahkan Filter Truncate (untuk ringkasan/excerpt)
    eleventyConfig.addFilter("truncate", function(content, length) {
        // Hapus tag HTML dari konten agar ringkasan bersih
        const strippedContent = content.replace(/<\/?[^>]+(>|$)/g, "");
        if (strippedContent.length <= length) {
            return strippedContent;
        }
        return strippedContent.substring(0, length) + '...';
    });


    // 5. Konfigurasi Direktori Input/Output
    return {
        dir: {
            input: ".", 
            includes: "_includes",
            output: "_site" 
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
