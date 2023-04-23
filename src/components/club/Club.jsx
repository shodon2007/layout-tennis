import React from 'react'

import img from '@/images/restangle.png';

function Club() {
  return (
    <div>
        <img src={img} alt="img man playing" />
        <div>
            <div>Спортивный клуб</div>
            <div>
                <p>Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus 
                quam tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet 
                liquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. Donec sit 
                pellentesque enim, vestibulum.</p>
                
                <p>Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.</p>
            </div>
            <div>Ornare orci ut dictum nulla fames.</div>
            <div>
                <ul>
                    <li>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li>
                    <li>Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum auctor.</li>
                    <li>Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis.</li>
                    <li>Scelerisque urna.Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Club