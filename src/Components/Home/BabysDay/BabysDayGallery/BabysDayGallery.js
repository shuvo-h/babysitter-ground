import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

const BabysDayGallery = () => {

    return (
        <div className='container mx-auto my-12'>
            <h1 className='my-6 text-center text-3xl font-bold'>Our Bay's Day in Picture</h1>
            <div>
                    <img className='float-left mr-4 mb-4' height="350px" width="350px" src="https://ochomeandfamily.com/wp-content/uploads/2019/12/OC-Home-Family_Difference-Between-a-Nanny-and-a-Babysitter-A-Guide_IMAGE1.jpeg" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quidem modi iste error officia cumque, debitis culpa repellat aspernatur sunt laborum magni possimus nemo recusandae illo. Tenetur aspernatur modi sit at repudiandae, ipsa dolore harum unde impedit maiores quasi fugit asperiores delectus vel adipisci repellat omnis consequatur qui deleniti voluptas perferendis neque. Dolore harum voluptates in quia repudiandae aliquam doloribus aspernatur quis excepturi temporibus sequi sint voluptate ullam et doloremque, a adipisci modi, porro asperiores odio ad optio? Est amet, voluptates architecto animi, ipsum, rerum suscipit optio nostrum voluptatibus harum eius molestiae obcaecati! Quo quas consectetur perspiciatis rerum minus ipsa laboriosam aspernatur tenetur sapiente, dignissimos porro nihil ut praesentium velit. Ab, mollitia tempore odit delectus aperiam temporibus illum alias id modi ducimus iusto in numquam et ex, corrupti possimus nisi officia perferendis! Doloremque in quia nostrum cupiditate sed eligendi veniam assumenda eum? Repellat voluptate rem ad eveniet quos praesentium necessitatibus, odio soluta, non quaerat fugit vero modi tempore dolores. Quo officia eligendi quam ad error at id reiciendis temporibus libero dicta? Possimus incidunt ducimus voluptatem aliquid obcaecati laudantium consequatur officia! Qui a libero corrupti explicabo, repellendus fugiat cumque quae quod natus accusamus optio provident ex distinctio, maxime quas maiores reiciendis? Sed amet voluptas nostrum dolore ratione quod deleniti doloribus expedita iusto temporibus minus exercitationem provident recusandae, quasi voluptatibus quas iste distinctio necessitatibus quaerat ea, blanditiis commodi accusantium? Quisquam, qui omnis! Ipsa, aliquam vero. Quibusdam, sapiente iure! Ipsa omnis tempora dignissimos cumque rerum debitis sed, eligendi sunt maxime quam ipsam facilis suscipit molestias quibusdam similique nulla eaque culpa rem deleniti deserunt, totam temporibus. Modi inventore necessitatibus iusto saepe, illo voluptas ad voluptates quibusdam nobis dolorum nam temporibus sit nihil accusantium obcaecati recusandae voluptate porro dolores facere maiores repellendus vero aspernatur! Tenetur quasi illum asperiores molestias nihil nemo aliquid sapiente, ea alias?</p>
            </div>
            <div>
                <Gallery images={IMAGES}/>
            </div>
        </div>
    );
};

export default BabysDayGallery;