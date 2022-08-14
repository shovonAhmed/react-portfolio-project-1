import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>HTML</h4>
              <h5 className='text-light'>Experienced</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>JavaScript</h4>
              <h5 className='text-light'>Experienced</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>Tailwind</h4>
              <h5 className='text-light'>Experienced</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>CSS</h4>
              <h5 className='text-light'>Intermediate</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>Bootstrap</h4>
              <h5 className='text-light'>Experienced</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>React</h4>
              <h5 className='text-light'>Experienced</h5>
              </div>
            </article>
          </div>
        </div>

        {/* backend experience */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>Node JS</h4>
              <h5 className='text-light'>Basic</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>PHP</h4>
              <h5 className='text-light'>Basic</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>Python</h4>
              <h5 className='text-light'>Basic</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>MongoDB</h4>
              <h5 className='text-light'>Basic</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon' />
              <div>
              <h4>MySQL</h4>
              <h5 className='text-light'>Basic</h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience