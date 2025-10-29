let session;
async function loadAndRunModel() {
    try {
        // Load the model
        session = await ort.InferenceSession.create("linear_model.onnx");

        // Prepare input
        const features = [age,screen_time_hours,work_screen_hours,leisure_screen_hours,sleep_hours,sleep_quality_1_5,
        exercise_minutes_per_week,social_hours_per_week,gender_encoded,occupation_encoded,work_mode_encoded,
        stress_level_encoded,productivity_encoded];
        
        //test input : [33, 10.79, 5.44, 5.35, 6.63, 1, 127, 0.7, 0, 0, 2, 0, 2]
        const inputTensor = new ort.Tensor("float32", Float32Array.from(features), [1, features.length]);
        const feeds = { input: inputTensor };

        // Run prediction
        const results = await session.run(feeds);
        localStorage.setItem("level",results.variable.data[0])
        window.location.assign("wellness-index.html")
        
    } catch (err) {
        console.error("Error during model load or prediction:", err);
    }
}
let age,screen_time_hours,work_screen_hours,leisure_screen_hours,sleep_hours,sleep_quality_1_5,
    exercise_minutes_per_week,social_hours_per_week,gender_encoded,occupation_encoded,work_mode_encoded,
    stress_level_encoded,productivity_encoded;
function encodeData() {
    age = Number(document.getElementById("age").value);
    work_screen_hours = Number(document.getElementById("workScreen").value);
    leisure_screen_hours = Number(document.getElementById("leisureScreen").value);
    sleep_hours = Number(document.getElementById("sleepHours").value);
    sleep_quality_1_5 = Number(document.getElementById("sleepQuality").value);
    exercise_minutes_per_week = Number(document.getElementById("exerciseTime").value)*60;//given in mins
    social_hours_per_week = Number(document.getElementById("socialTime").value);
    gender_encoded = Number(document.getElementById("gender").value);
    occupation_encoded = Number(document.getElementById("occupation").value);
    work_mode_encoded = Number(document.getElementById("workMode").value);
    stress_level_encoded = Number(document.getElementById("stressLevel").value);
    productivity_encoded = Number(document.getElementById("productivity").value);
    screen_time_hours = work_screen_hours+leisure_screen_hours;
    
    if (age!=null & screen_time_hours!=null & work_mode_encoded!=null & work_screen_hours!=null
        & leisure_screen_hours!=null & sleep_hours!=null & sleep_quality_1_5!=null & exercise_minutes_per_week!=null
        & social_hours_per_week!=null & gender_encoded!=null & occupation_encoded!=null & stress_level_encoded!=null
        & productivity_encoded!=null){
     loadAndRunModel();   
    }

}
