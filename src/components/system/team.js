import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import SimpleBar from '../ui/SimpleBar';
import Profile from '../ui/profile';

const useStyles = makeStyles((theme) => ({
  PDOGS_Content_Display: {
    display: 'block',
  },
  PDOGS_Content_Hide: {
    display: 'none',
  },
  PDOGS_Button_default: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
  PDOGS_Button_Clicked: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  profile: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function Team() {
  const classes = useStyles();

  const [display, setDisplay] = useState([true, false, false]);

  const handleClick6 = () => {
    setDisplay([true, false, false]);
  };
  const handleClick4s = () => {
    setDisplay([false, true, false]);
  };
  const handleClick1 = () => {
    setDisplay([false, false, true]);
  };

  return (
    <div>
      <h1>Develop Team</h1>
      <Button
        variant="outlined"
        color="primary"
        className={display[0] === true ? classes.PDOGS_Button_Clicked : classes.PDOGS_Button_default}
        onClick={handleClick6}
      >
        PDOGS 6
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={display[1] === true ? classes.PDOGS_Button_Clicked : classes.PDOGS_Button_default}
        onClick={handleClick4s}
      >
        PDOGS 4S
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={display[2] === true ? classes.PDOGS_Button_Clicked : classes.PDOGS_Button_default}
        onClick={handleClick1}
      >
        PDOGS 1.0 &amp; 2.0
      </Button>
      <div className={display[0] === true ? classes.PDOGS_Content_Display : classes.PDOGS_Content_Hide}>
        <SimpleBar title="PM" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/Kiyume.jpg"
              name="????????? Kiyume"
              description="PM, Webserver, Judge Core, Migration, DevOps"
              FB_link="http://fb.com/e9cf87fc"
              Linkedin_link="http://www.linkedin.com/in/yunchi-cheng"
            />
          </div>
        </SimpleBar>
        <SimpleBar title="Design" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/wendee.png"
              name="????????? wendee"
              description="Design, FE"
              FB_link="https://www.facebook.com/wendeezinha"
              Github_link="https://github.com/wendeehsu"
              Linkedin_link="https://www.linkedin.com/in/yuan-chih-hsu/"
            />
            <Profile
              img_url="../../../images/wpbag.jpg"
              name="????????? wpbag"
              description="Design"
              FB_link="https://www.facebook.com/wpbag/"
              Github_link="https://github.com/yin1218"
              Linkedin_link="http://www.linkedin.com/in/wpbag"
            />
            <Profile
              img_url="../../../images/DerekLu.jpg"
              name="????????? Derek Lu"
              description="Design"
              FB_link="https://www.facebook.com/derekdylu"
              Github_link="https://derekdylu.github.io/"
              Linkedin_link="https://www.linkedin.com/in/derekdylu"
            />
          </div>
        </SimpleBar>
        <SimpleBar title="Frontend" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/timicienio.jpg"
              name="????????? timicienio"
              description="FE"
              FB_link="https://www.facebook.com/profile.php?id=100005076990283"
              Github_link="https://github.com/timicienio"
              Linkedin_link="http://www.linkedin.com/in/tmcn"
            />
            <Profile
              img_url="../../../images/GaryHu.jpg"
              name="????????? Gary1030"
              description="FE"
              FB_link="https://www.facebook.com/gary.hu.5680"
              Linkedin_link="http://www.linkedin.com/in/gary-hu-2000"
            />
            <Profile
              img_url="../../../images/HuangFu.jpg"
              name="???????????? HuangFu"
              description="FE"
              FB_link="https://www.facebook.com/Peter.HaungFu/"
              Github_link="https://github.com/peterhuangfu"
              Linkedin_link="https://www.linkedin.com/in/li-hsiang-huang-fu-0b1825184/"
            />
            <Profile
              img_url="../../../images/Ray.jpg"
              name="????????? Ray"
              description="FE"
              FB_link="https://www.facebook.com/profile.php?id=100003519372915"
              Github_link="https://github.com/raymanlee89"
            />
            <Profile
              img_url="../../../images/pochunwu.jpg"
              name="????????? Po-Chun Wu"
              description="FE"
              FB_link="https://www.facebook.com/profile.php?id=100027240108806"
              Linkedin_link="https://www.linkedin.com/in/pochunwu2000/"
            />
            <Profile
              img_url="../../../images/erica.jpg"
              name="????????? erica"
              description="FE"
              FB_link="https://www.facebook.com/profile.php?id=100006123196027"
              Linkedin_link="https://www.linkedin.com/in/an-yun-cheng"
            />
            <Profile
              img_url="../../../images/DaphneHou.JPG"
              name="????????? Daphne Hou"
              description="FE"
              FB_link="https://www.facebook.com/daphne.hou.9/"
              Linkedin_link="https://www.linkedin.com/in/daphne-hou-2016ab220/"
            />
            <Profile
              img_url="../../../images/amberliu.JPG"
              name="????????? amberliu"
              description="FE"
              FB_link="https://www.facebook.com/profile.php?id=100006116703389"
              Linkedin_link="https://www.linkedin.com/in/amber-liu-2b05651a2/"
            />
            <Profile
              img_url="../../../images/wilson.jpg"
              name="????????? wilson"
              description="FE"
              FB_link="https://www.facebook.com/Hsu.Wilson0915/"
              Linkedin_link="https://www.linkedin.com/in/wilson-hsu-4976b31b7/"
            />
            <Profile
              img_url="../../../images/Duge.jpg"
              name="????????? Duge"
              description="FE"
              FB_link="https://www.facebook.com/DuckChingYuan"
              Github_link="https://github.com/duge03705022"
            />
          </div>
        </SimpleBar>
        <SimpleBar title="Backend" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/chessy.png"
              name="????????? Chessy"
              description="Webserver"
              FB_link="https://www.facebook.com/profile.php?id=100001355608650"
              Linkedin_link="http://linkedin.com/in/chessyhsu"
            />
            <Profile
              img_url="../../../images/sheeeeeeeep.JPG"
              name="?????? Sheeeeeeeep"
              description="Webserver, Migration"
              FB_link="https://www.facebook.com/sheep1129588/"
              Linkedin_link="https://www.linkedin.com/in/yangcheng1229/"
            />
            <Profile
              img_url="../../../images/pollyho.jpg"
              name="????????? pollyho"
              description="Webserver"
              FB_link="https://www.facebook.com/profile.php?id=100005192733634"
              Linkedin_link="http://www.linkedin.com/in/pinyuho"
            />
            <Profile
              img_url="../../../images/wsa.JPG"
              name="????????? wsa"
              description="Webserver"
              FB_link="https://www.facebook.com/profile.php?id=100008141530919"
              Linkedin_link="http://linkedin.com/in/benson-wang-a01ba91bb"
            />
          </div>
        </SimpleBar>
        <SimpleBar title="DevOps" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/fredred.jpg"
              name="????????? fredred"
              description="DevOps"
              FB_link="https://www.facebook.com/fredred375"
              Github_link="https://github.com/fredred375"
              Linkedin_link="https://www.linkedin.com/in/fredred/"
            />
            <Profile
              img_url="../../../images/jtc.JPG"
              name="????????? jtc"
              description="DevOps, Judge Core"
              FB_link="https://www.facebook.com/jtongchenzip/"
              Linkedin_link="https://www.linkedin.com/in/jtongchen/"
            />
          </div>
        </SimpleBar>
      </div>
      <div className={display[1] === true ? classes.PDOGS_Content_Display : classes.PDOGS_Content_Hide}>
        <SimpleBar title="Core Develop Team" noIndent>
          <div className={classes.profile}>
            <Profile img_url="../../../images/Shouko.png" name="????????? Shouko" description="System" />
            <Profile img_url="../../../images/bigelephant29.png" name="????????? bigelephant29" description="System" />
            <Profile img_url="../../../images/arbuztw.png" name="????????? arbuztw" description="System" />
            <Profile img_url="../../../images/ViktorLin.png" name="????????? Viktor Lin" description="System" />
            <Profile
              img_url="../../../images/Duge.jpg"
              name="????????? Duge"
              description="System"
              FB_link="https://www.facebook.com/DuckChingYuan"
              Github_link="https://github.com/duge03705022"
            />
            <Profile
              img_url="../../../images/Seanliao.png"
              name="????????? Seanliao"
              description="System"
              FB_link="https://www.facebook.com/seankhliao"
            />
            <Profile img_url="../../../images/Elantris.png" name="????????? Elantris" description="System" />
            <Profile img_url="../../../images/doge.png" name="????????? ChouChouHu" description="Design" />
            <Profile img_url="../../../images/doge.png" name="????????? seanchen47" description="Design" />
            <Profile img_url="../../../images/doge.png" name="????????? kh9543" description="Design" />
            <Profile img_url="../../../images/doge.png" name="????????? CApopsicle" description="Design" />
            <Profile img_url="../../../images/doge.png" name="????????? BonnieTu" description="Design" />
          </div>
        </SimpleBar>
        <SimpleBar title="Maintainers" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/Duge.jpg"
              name="????????? Duge"
              description="[2015-2017]"
              FB_link="https://www.facebook.com/DuckChingYuan"
              Github_link="https://github.com/duge03705022"
            />
            <Profile img_url="../../../images/doge.png" name="????????? fts152" description="[2017-2018]" />
            <Profile
              img_url="../../../images/secret104278.jpg"
              name="????????? secret104278"
              description="[2018-2019]"
              FB_link="https://www.facebook.com/secret104278"
            />
            <Profile
              img_url="../../../images/ginoah.jpg"
              name="????????? ginoah"
              description="[2019-2020]"
              FB_link="https://www.facebook.com/G1N0CHU"
            />
            <Profile
              img_url="../../../images/eethan1.jpg"
              name="????????? eethan1"
              description="[2020-2021]"
              FB_link="https://www.facebook.com/cjiso1117"
            />
            <Profile
              img_url="../../../images/eKL016.jpg"
              name="????????? eKL016"
              description="Supportive Developers"
              FB_link="https://www.facebook.com/ethan4ever"
            />
            <Profile
              img_url="../../../images/Kiyume.jpg"
              name="????????? Kiyume"
              description="Supportive Developers"
              FB_link="http://fb.com/e9cf87fc"
              Linkedin_link="http://www.linkedin.com/in/yunchi-cheng"
            />
          </div>
        </SimpleBar>
        <SimpleBar title="2017 Enhancement Project" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/ck20jimmy.jpg"
              name="????????? ck20jimmy"
              FB_link="https://www.facebook.com/ck20jimmy"
            />
            <Profile
              img_url="../../../images/alexis1437.jpg"
              name="????????? alexis1437"
              FB_link="https://www.facebook.com/alexis.wang.10"
            />
            <Profile
              img_url="../../../images/doge.png"
              name="????????? chester11206"
              FB_link="https://www.facebook.com/profile.php?id=100000307970316"
            />
            <Profile
              img_url="../../../images/kaiyee0.jpg"
              name="????????? kaiyee0"
              FB_link="https://www.facebook.com/profile.php?id=100002253904214"
            />
            <Profile
              img_url="../../../images/joseph.chen.jpg"
              name="????????? joseph.chen"
              FB_link="https://www.facebook.com/joseph.chen.5855"
            />
          </div>
        </SimpleBar>
        <SimpleBar title="Special Thanks" noIndent>
          <div className={classes.profile}>
            <Profile
              img_url="../../../images/doge.png"
              name="????????? Nekosyndrome"
              Github_link="https://github.com/Nekosyndrome"
            />
            <Profile
              img_url="../../../images/doge.png"
              name="????????? andy0130tw"
              Github_link="https://github.com/andy0130tw"
            />
          </div>
        </SimpleBar>
      </div>
      <div className={display[2] === true ? classes.PDOGS_Content_Display : classes.PDOGS_Content_Hide}>
        <SimpleBar title="System" noIndent>
          <Profile img_url="../../../images/doge.png" name="????????? flf2ko" />
        </SimpleBar>
        <SimpleBar title="Image" noIndent>
          <div className={classes.profile}>
            <Profile img_url="../../../images/doge.png" name="????????? illeanore" />
            <Profile img_url="../../../images/doge.png" name="????????? yaohappy" />
          </div>
        </SimpleBar>
      </div>
    </div>
  );
}
