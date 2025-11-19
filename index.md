---
layout: base.njk
title: Halaman Utama Blog Saya
---
<section class="article-section" id="articleSection">
  <h1>Selamat Datang di Blog Saya!</h1>
  <p>Di sini Anda dapat menemukan daftar postingan terbaru saya:</p>

  <hr class="divider">

  {# Melakukan loop (perulangan) pada semua postingan blog yang ditemukan di folder 'posts/' #}
  {# | reverse digunakan agar post terbaru muncul di atas #}
  {% for post in collections.posts | reverse %}
    <div class="article-item">
      {# post.url akan mengambil link ke file Markdown (misalnya /posts/first-post/) #}
      <h2 class="article-title"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
      <div class="article-meta">
        {# post.data.date menggunakan filter date yang sudah didefinisikan di .eleventy.js #}
        <span class="article-date">{{ post.data.date | date }}</span>
        {# Menampilkan tags yang didefinisikan di Front Matter post #}
        <span class="article-tags">{{ post.data.tags | join(", ") }}</span>
      </div>
      <div class="article-body">
        {# post.templateContent berisi konten Markdown, yang kemudian di-truncate #}
        <p>{{ post.templateContent | truncate(300) }}</p>
      </div>
      <a href="{{ post.url | url }}" style="text-decoration: underline; color: #ff0000;">Baca Selengkapnya →</a>
    </div>
    <hr class="divider">
  {% endfor %}

  {# Pesan jika belum ada post yang dibuat #}
  {% if collections.posts.length == 0 %}
    <p>Belum ada postingan yang diterbitkan. Coba buat file Markdown di folder <code>posts/</code>!</p>
  {% endif %}

</section>
