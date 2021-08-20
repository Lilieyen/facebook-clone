import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
              image="https://i.postimg.cc/kXRTFtqp/img3.jpg"
              profileSrc="https://i.postimg.cc/tT16QWS0/src1.jpg"
              title="Anna May"
              />
              <Story
              image="https://i.postimg.cc/bJCsJJ5x/img2.jpg"
              profileSrc="https://i.postimg.cc/tCzYcBqZ/src6.jpg"
              title="Judd Peters"
              />
              <Story
              image="https://i.postimg.cc/d03fq6x1/img4.jpg"
              profileSrc="https://i.postimg.cc/qq4pXdCm/src3.jpg"
              title="Patrick Patterson"
              />
              <Story
              image="https://i.postimg.cc/63kTRS9q/img5.jpg"
              profileSrc="https://i.postimg.cc/yxyYwNH4/src5.jpg"
              title="Marcia Clement"
              />
              <Story
              image="https://i.postimg.cc/gkDkkr6n/img6.jpg"
              profileSrc="https://i.postimg.cc/4dbg3FFp/src2.jpg"
              title="Najuma Wek"
              />
        </div>
    )
}

export default StoryReel
