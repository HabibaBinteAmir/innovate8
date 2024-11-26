import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Image from './componants/Image'
import logo from './assets/logo.png'
import logo2 from './assets/logo2.png'
import box1 from './assets/box1.png'
import box2 from './assets/box2.png'
import show1 from './assets/show1.png'
import show2 from './assets/show2.png'
import show3 from './assets/show3.png'
import show4 from './assets/show4.png'
import show5 from './assets/show5.png'
import show6 from './assets/show6.png'
import blog from './assets/blog.png'
import review1 from './assets/review1.png'
import review from './assets/review.png'
import service1 from './assets/service1.png'
import service2 from './assets/service2.png'
import service3 from './assets/service3.png'
import progress from './assets/progress.png'
import about from './assets/about.png'
import about2 from './assets/about2.png'
import putul from './assets/putul.png'
import Menu from './componants/Menu'
import Button from './componants/Button'
import Heading from './componants/Heading'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="py-3 bg-[#ffffff]  top-0 left-0 fixed w-full z-40 " >
      <Container className={"max-w-[900px]"}>
       <Flex className={'justify-between'}>
        <div className="">
          <Image src={logo} alt={logo} className={"w-full"}/>
        </div>

        <div className="pt-4">
          <Flex className={'gap-x-8 font-open text-[#192239] text-[16px] font-semibold'}>
          <Menu mtext={"Home"} className={'hover:text-[#FF7628] duration-300'}/>
          <Menu mtext={"About"} className={'hover:text-[#FF7628] duration-300'}/>
          <Menu mtext={"Service"} className={'hover:text-[#FF7628] duration-300'}/>
          <Menu mtext={"Portfolio"} className={'hover:text-[#FF7628] duration-300'}/>
          <Menu mtext={"Price"} className={'hover:text-[#FF7628] duration-300'}/>
          <Menu mtext={"Blog"} className={'hover:text-[#FF7628] duration-300'}/>
          </Flex>
        </div>
        <div className="">
          <Button btntext={'Contact Us'} className={'px-8 py-4 bg-[#FF7628] rounded-full font-semibold text-white font-open text-[14px] border border-[#FF7628] hover:bg-white  hover:text-[#FF7628] duration-500'}/>
        </div>
       </Flex>
      </Container>
     </div>
     {/* banner part start */}
     <div className="bg-banner py-[150px] bg-cover bg-center bg-no-repeat relative">
      <Container>
        <Flex className={'gap-x-16'}>
          <div className="w-[10%]">
            <Image src={putul} alt={putul} className={'w-full'}/>
          </div>
          <div className="w-[50%]">
            <Image src={logo2} className={''}/>
            <Heading text={'We Are Digital #Marketing# Agency '} className={'font-extrabold text-[#192239] font-open text-[62px] '}/>
            <Heading text={'Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing.'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px] '}/>
            <div className="">
              <Button btntext={'Get Free Quoto'} className={'px-8 py-4 bg-[#FF7628] rounded-full text-white font-semibold font-open text-[16px]  border border-[#FF7628] hover:bg-white  hover:text-[#FF7628] duration-500'}/>
            </div>
          </div>
          <div className="w-[30%]  relative pt-8">
            <div className="w-[250px] absolute top-0 right-0">
            <Image src={box1} className={'w-full '}/>
            
            </div>
            <div className="w-[250px] absolute top-40 right-48" >
            <Image src={box2} className={'w-full'}/>
            </div>
    
          </div>
        </Flex>
      </Container>
     </div>
     {/* banner part end */}
     {/* Service Part starts */}
     <div className="">
      <Container className={'max-w-[930px]'}>
        <div className="text-center ">
          <Image src={logo2} className={'m-auto'}/>
          <Heading text={'Our Services '} className={'font-extrabold text-[#192239] font-open text-[38px] '}/>
          <Heading text={'We have been providing great flooring solutions service.'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px] pr-[300px] pl-[300px] '}/>
        </div>
        <div className="">
          <Flex className={'justify-between'}>
            <div className="w-[31%] bg-[#EBF7E9] py-[50px]  pb-6 mb-8 rounded-2xl hover:shadow-lg duration-500">
              <Image src={service1} className={'m-auto pt-3 pb-4'}/>
              <div className="p-5 text-center rounded-xl">
              <Heading text={'Marketing Startegy'} className={'font-open font-semibold text-[#202427] text-[22px] pb-4 pt-2'}/>
              <Heading text={'Social Media has changed the way we interact & do business while creating'} className={'font-papri text-[14px] text-[#6C7D93]'}/>
              <Button btntext={'Read More'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold mt-5'}/>
              
              
              </div>
            </div>
            <div className="w-[31%] bg-[#D8EAFF] py-[50px]  pb-6 mb-8 rounded-2xl hover:shadow-lg duration-500">
              <Image src={service2} className={'m-auto pt-3 pb-4'}/>
              <div className="p-5 text-center rounded-xl">
              <Heading text={'Social Marketing'} className={'font-open font-semibold text-[#202427] text-[22px] pb-4 pt-2'}/>
              <Heading text={'Social Media has changed the way we interact & do business while creating'} className={'font-papri text-[14px] text-[#6C7D93]'}/>
              <Button btntext={'Read More'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold mt-5'}/>
              
              
              </div>
            </div>
            <div className="w-[31%] bg-[#FBF1EC] py-[50px]  pb-6 mb-8 rounded-2xl hover:shadow-lg duration-500">
              <Image src={service3} className={'m-auto pt-3 pb-4'}/>
              <div className="p-5 text-center rounded-xl">
              <Heading text={'Content Marketing'} className={'font-open font-semibold text-[#202427] text-[22px] pb-4 pt-2'}/>
              <Heading text={'Social Media has changed the way we interact & do business while creating'} className={'font-papri text-[14px] text-[#6C7D93]'}/>
              <Button btntext={'Read More'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold mt-5'}/>
              
              
              </div>
            </div>
          </Flex>
        </div>
      </Container>
     </div>
    
     {/* Service Part end */}
     {/* About part start */}
     <div className="pt-[150px] pb-[100px]">
      <Container className={'max-w-[900px]'}>
       <Flex className={'justify-between'}>
       <div className="w-[45%]">
          <Image src={about} className={''}/>
        </div>
        <div className="w-[50%]">
        <Image src={logo2} className={''}/>
            <Heading text={'Who We Are'} className={'font-extrabold text-[#192239] font-open text-[35px] '}/>
            <Heading text={'We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, .'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[14px] pr-[100px]'}/>
            <Image src={about2}/>
        </div>
       </Flex>

      </Container>

     </div>
     {/* About part end*/}
     {/* show part start */}
     <div className="">
      <Container className={'max-w-[930px]'}>
      <div className="text-center pb-[70px]">
          <Image src={logo2} className={'m-auto'}/>
          <Heading text={'Work Showcase  '} className={'font-extrabold text-[#192239] font-open text-[45px] '}/>
        </div>
        <div className="pb-5">
          <Flex className={'gap-x-8 font-semibold font-open text-[20px] text-[#6C7D93]   '}>
            <Menu mtext={'All'} className={'hover:text-[#FF7628] duration-200'}/>
            <Menu mtext={'Digital Mkt'} className={'hover:text-[#FF7628] duration-200'} />
            <Menu mtext={'Branding'} className={'hover:text-[#FF7628] duration-200'} />
            <Menu mtext={'Content Mkt'} className={'hover:text-[#FF7628] duration-200'}/>
            <Menu mtext={'Social Media Mkt'} className={'hover:text-[#FF7628] duration-200'}/>
          </Flex>
        </div>
        <div className="pb-[50px]">
          <Flex className={'gap-x-6 mt-3 mb-3'}>
            <div className="">
            <Image src={show1}/>
            </div>
            <div className="">
            <Image src={show2}/>
            </div>
            <div className="">
            <Image src={show3}/>
            </div>
           
            
          </Flex>
          <Flex className={'gap-x-6 mb-3'}>
          <div className="">
            <Image src={show4}/>
            </div>
            <div className="">
            <Image src={show5}/>
            </div>
            <div className="">
            <Image src={show6}/>
            </div>
          </Flex>
        </div>
      
      </Container>
     </div>
     {/* show part end */}
     {/* prograssPart start */}
     <div className=" pt-[50px] pb-[100px]">
      <Container className={'max-w-[930px]'}>
      <div className="text-center ">
          <Image src={logo2} className={'m-auto'}/>
          <Heading text={'Our creative process.'} className={'font-extrabold text-[#192239] font-open text-[38px] '}/>
          <Heading text={'We provide digital experience services to startups and small businesses.'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px] pr-[300px] pl-[300px] '}/>
        </div>
        <div className="">
          <Flex className={'justify-between mt-[30px] mb-14'}>
            <div className="w-[44%] py-[15px] bg-[#EBF7E9] hover:bg-[#D8EAFF] duration-300 rounded-2xl mt-[50px] p-5">
            <Button btntext={'Step-1'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold'}/>
            <Heading text={'Our creative process.'} className={'font-semibold text-[#202427] font-open text-[24px] pt-2'}/>
            <Heading text={'Practical tools and features make it easier to build and manage your site.'} className={' text-[#6C7D93] pt-1 font-papri text-[16px]'}/>
            </div>
            
            <div className="w-[47%] h-[200px]">
              <Image src={progress}/>
            </div>
          </Flex >
          
            <Flex className={'justify-between mb-14'}>
            <div className="w-[47%] h-[200px]">
              <Image src={progress}/>
            </div>
            <div className="w-[44%] py-[15px] bg-[#D8EAFF] hover:bg-[#FBF1EC] duration-300 rounded-2xl mt-[50px] p-5">
            <Button btntext={'Step-1'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold'}/>
            <Heading text={'Our creative process.'} className={'font-semibold text-[#202427] font-open text-[24px] pt-2'}/>
            <Heading text={'Practical tools and features make it easier to build and manage your site.'} className={' text-[#6C7D93] pt-1 font-papri text-[16px]'}/>
            </div>
            </Flex>
            <Flex className={'justify-between mt-[30px] mb-14'}>
            <div className="w-[44%] py-[15px] bg-[#FBF1EC] hover:bg-[#EBF7E9] duration-300 rounded-2xl mt-[50px] p-5">
            <Button btntext={'Step-1'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold'}/>
            <Heading text={'Our creative process.'} className={'font-semibold text-[#202427] font-open text-[24px] pt-2'}/>
            <Heading text={'Practical tools and features make it easier to build and manage your site.'} className={' text-[#6C7D93] pt-1 font-papri text-[16px]'}/>
            </div>
            
            <div className="w-[47%] h-[200px]">
              <Image src={progress}/>
            </div>
          </Flex >
          
        </div>

      </Container>
     </div>
     {/* prograssPart end */}
     {/* review Part start */}
     <div className="">
      <Container className={'max-w-[930px] mb-[100px]'}>
        <Flex className={'gap-x-5'}>
          <div className="w-[31%]  rounded-2xl  me-auto">
             <Image src={logo2}/>
             <Heading text={'Client Review'} className={'font-extrabold text-[#192239] font-open text-[38px] '}/>
             <Heading text={'people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px]  '}/>
             <Image src={review1} className={'m-auto'}/>
          </div>
          <div className="w-[31%] p-7 shadow-xl hover:bg-[#D8EAFF] rounded-2xl duration-300">
          <Heading text={'Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. .'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px]  '}/>
          <Flex>
            <div className="">
            <Image src={review}/>
            </div>
            <div className="pt-5 ml-1">
            <Heading text={'Jane Cooper'} className={'font-semibold text-[#202427] font-open text-[18px] '}/>
            <Heading text={'Fashion Designer'} className={'font-semibold text-[#202427] font-open text-[14px] '}/>
            </div>
          </Flex>


          </div>
          <div className="w-[31%] p-7 shadow-xl hover:bg-[#D8EAFF] duration-500 rounded-2xl ">
          <Heading text={'Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. .'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px]  '}/>
          <Flex>
            <div className="">
            <Image src={review}/>
            </div>
            <div className="pt-5 ml-1">
            <Heading text={'Eleanor Pena'} className={'font-semibold text-[#202427] font-open text-[18px] '}/>
            <Heading text={'Architecture'} className={'font-semibold text-[#202427] font-open text-[14px] '}/>
            </div>
          </Flex>
          </div>
        </Flex>
      </Container>
     </div>
     {/* review Part end */}
     {/* blog part start */}
     <div className=" pt-[50px] pb-[50px]">
      <Container className={'max-w-[930px]'}>
      <div className="text-center ">
          <Image src={logo2} className={'m-auto'}/>
          <Heading text={'Our Latest Blog'} className={'font-extrabold text-[#413F45] font-open text-[38px] '}/>
          <Heading text={'We provide digital experience services to startups and small businesses.'} className={' text-[#6C7D93] pt-4 pb-6 font-papri text-[16px] pr-[260px] pl-[250px] '}/>
        </div>
        <div className="">
          <Flex className={'justify-between'}>
            <div className="w-[31%]">
              <Image src={blog}/>
              <div className=" w-full py-6 p-10 rounded-b-2xl shadow-xl">
              <Heading text={'How to Be Ahead of Stock Changes'} className={'font-medium text-[#413F45] font-open text-[18px] pr-[50px]'}/>
              <Heading text={'By John  - 5 Comments'} className={' text-[#474747] font-open text-[14px] pt-2'}/>
              <Button btntext={'Read More'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold mt-5 ml-[8px] '}/>
              </div>
            </div>
            <div className="w-[31%]">
              <Image src={blog}/>
              <div className=" w-full py-6 p-10 rounded-b-2xl shadow-xl">
              <Heading text={'Online Reputation And Management'} className={'font-medium text-[#413F45] font-open text-[18px] pr-[50px]'}/>
              <Heading text={'By Amin  - 10 Comments'} className={' text-[#474747] font-open text-[14px] pt-2'}/>
              <Button btntext={'Read More'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold mt-5 ml-[8px] '}/>
              </div>
            </div>
            <div className="w-[31%]">
              <Image src={blog}/>
              <div className=" w-full py-6 p-10 rounded-b-2xl shadow-xl">
              <Heading text={'Tips To Move Your Project More Forward'} className={'font-medium text-[#413F45] font-open text-[18px] '}/>
              <Heading text={'By Indir  - 15 Comments'} className={' text-[#474747] font-open text-[14px] pt-2'}/>
              <Button btntext={'Read More'} className={'relative after:absolute after:h-[30px] after:w-[30px] after:contant-[""] after:-left-[13px] after:-top-[4px] after:bg-golla after:rounded-full text-[16px] font-open font-bold mt-5 ml-[8px] '}/>
              </div>
            </div>
            
          </Flex>
        </div>
      </Container>
     </div>

     {/* blog part end */}
     {/* footer part start */}
     <div className="pt-[100px] pb-[70px] ">
      <Container className={'max-w-[930px]'}>
        <Flex className={'justify-between'}>
          <div className="w-[41%]">
            <Image src={logo}/>
            <Heading text={'Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.'} className={' text-[#6C7D93] pt-4 pb-6 font-nuni text-[16px]  '}/>
          </div>
          <div className="w-[15%] text-cente">
          <Heading text={'Features'} className={'font-medium text-[#413F45] font-open text-[18px] '}/>
          <div className="pt-4  text-[14px] font-nuni  text-[#6C7D93] ">
          
          <Menu mtext={"Home"} className={'pt-2'}/>
          <Menu mtext={"About"} className={'pt-2'}/>
          <Menu mtext={"Benifit"} className={'pt-2'}/>
          <Menu mtext={"Pricing"} className={'pt-2'}/>
          <Menu mtext={"Blog"} className={'pt-2'}/>
         
        </div>


          </div>
          <div className="w-[18%]">
          <Heading text={'Products'} className={'font-medium text-[#413F45] font-open text-[18px] '}/>
          <div className="pt-4  text-[14px] font-open  text-[#6C7D93] ">
          
          <Menu mtext={"Task Management"} className={'pt-2'}/>
          <Menu mtext={"Company growth"} className={'pt-2'}/>
          <Menu mtext={"Time tracking"} className={'pt-2'}/>
          
         
        </div>


          </div>
          <div className="w-[18%]">
          <Heading text={'Support'} className={'font-medium text-[#413F45] font-open text-[18px] '}/>
          <div className="pt-4  text-[14px] font-nuni  text-[#6C7D93] ">
          
          <Menu mtext={"HoCustomer serviceme"} className={'pt-3'}/>
          <Menu mtext={"Accessibility"} className={'pt-3'}/>
          <Menu mtext={"Contact us"} className={'pt-3'}/>
        </div>
          </div>
        </Flex>
        <div className="pt-[70px]">
          <Flex className={'justify-between'}>
            <div className="w-[50%]">
            <Heading text={'@20201 Innovate.All rights reserved.'} className={' text-[#6C7D93] pt-4 pb-6 font-nuni text-[14px]  '}/>
            </div>
            <div className="w-[18%]">
            <Heading text={'Privacy policy'} className={' text-[#6C7D93] pt-4 pb-6 font-nuni text-[14px]  '}/>
           
            </div>
            <div className="w-[18%]">
            <Heading text={'Terms & condition'} className={' text-[#6C7D93] pt-4 pb-6 font-nuni text-[14px]  '}/>
            </div>
          </Flex>
        </div>
      </Container>

     </div>
     {/* footer part end */}
    </>
  )
}

export default App
