import App from "./App.jsx"
function Hello()
{
  
    return(
      <p style={{textAlign:"left"}}>Hello</p>
    );
  
}
function Galaxy(props)    
{
  return (
    <div style={{
      textAlign:"left"
    }}>
    <h4>Name:{props.name}</h4>
    <h4>Process:{props.process}</h4>
    </div>
  );
}
function Star()
{
  return(
    
    <Galaxy name="Sun"
    process="Nuclear Fission and Fusion"></Galaxy>
  
  );
}
function Summary(props)
{
  return (
   <p> November 1923 – March 8, 1935)[1][2] was an Akita dog remembered 
    for his strong dedication to his owner, Hidesaburō Ueno {props.job}, for whom he 
    continued to wait for almost {props.company}ten years following Ueno's death in 1925.
    Hachikō was born in mid-November 1923, on a farm near Ōdate, Akita Prefecture,
    Japan.[4] In 1924,{props.skill1} Hidesaburō Ueno, a professor at the Tokyo Imperial University, 
    brought him to live in Shibuya, Tokyo, as his pet. Hachikō met Ueno at Shibuya Station 
    every day after his commute home.{props.skill2} This continued until May 21, 1925, when Ueno died of a 
    cerebral aneurysm infarction while at work. From then{props.skill3} until his death on March 8, 1935, 
    Hachikō returned to Shibuya Station almost every day to await Ueno's return.
</p>
  );
}
function Animator (){
  return(
<Summary
   job="Animator"
   company="Garena"
   skill1="Unreal Engine"
   skill2="Blender"
   skill3="Graphic designing"
   >

</Summary>
  );
}
function animal() {
    return (
      <>
      <h4>Animals</h4>
      <div style={{display: "flex",gap:"20px"}}>
      <p style={{textAlign:"justify"}}>Hachikō (ハチ公; mid-November 1923 – March 8, 1935)[1][2] was an Akita dog remembered for his strong dedication to his owner, Hidesaburō Ueno, for whom he continued to wait for almost ten years following Ueno's death in 1925.

Hachikō was born in mid-November 1923, on a farm near Ōdate, Akita Prefecture, Japan.[4] In 1924, Hidesaburō Ueno, a professor at the Tokyo Imperial University, brought him to live in Shibuya, Tokyo, as his pet. Hachikō met Ueno at Shibuya Station every day after his commute home. This continued until May 21, 1925, when Ueno died of a cerebral aneurysm infarction while at work. From then until his death on March 8, 1935, Hachikō returned to Shibuya Station almost every day to await Ueno's return.

According to contemporary accounts, Hachikō faced neglect and occasional mistreatment at Shibuya Station after Ueno's death, but was undeterred from visiting. Once his story became nationally known, his remarkable display of loyalty was widely reported in Japanese media, and public interest grew significantly. After he became known internationally, his story led Helen Keller to bring the first Akita to America. Since his death, he continues to be remembered worldwide in popular culture with statues, movies, and books.</p>
      <img style={{width:200}} src="https://i.pinimg.com/originals/90/95/14/9095143f93f924e5c21f753768e47f7c.jpg" alt="dog" />
    
   
    </div>

    <Hello> </Hello>
    <Star></Star>
    <Animator></Animator>
      </>
       );

}
export default animal;