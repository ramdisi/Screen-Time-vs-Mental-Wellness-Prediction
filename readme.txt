The dataset titled Screen Time vs Mental Wellness Survey – 2025 was sourced from Kaggle
by “Adharshini KUMARESAN” which was uploaded recently and contains responses from 400 individuals on 15 features. 

**Technical Approach**
•Python for scripting and model development
•Pandas & NumPy for data manipulation
•Matplotlib & Seaborn for visualization
•Scikit-learn for label encoding, data splitting and for some ML models
•TensorFlow/ Karas for deep learning implementation
•Jupyter Notebook for documentation and experimentation

**Final Results for Each Model**
•Deep Learning Model (keras.sequential) - Loss:0.4059 , MAE:0.3414 , Exactly Righ value Prediction:0%
•Linear Regression Model (scikitlearn)  - R^2 Score:0.7951 , MAE:7.1388 , Exactly Righ value Prediction: 0.00%
•Logistic Regression Model (scikitlearn)- R^2 Score:0.8750 , MAE:0.1750 , Exactly Righ value Prediction:87.50%
•support vector Machine (scikitlearn)   - R^2 Score:0.7500 , MAE:0.2500 , Exactly Righ value Prediction:75.00%
•Random Forest Model (scikitlearn)      - R^2 Score:0.8875 , MAE:0.1625 , Exactly Righ value Prediction:88.75%
•Decission Tree Model (scikitlearn)     - R^2 Score:0.8625 , MAE:0.1625 , Exactly Righ value Prediction:86.25%

                                | Highest              | Lowest 
MAE                             | Linear Regression    | Random Forest
Exactly Righ value Prediction   | Random Forest        | Linear Regression/Deep learn(keras.sequential)
R^2 Score                       | Random Forest        | Linear Regression

Most accuracatd model is goes for Random Forest model!!
Least one was DeepLearning model!

Links:
 Dataset link - https://www.kaggle.com/datasets/adharshinikumar/screentime-vs-mentalwellness-survey-2025
 Live link - https://ramdisi.github.io/Screen-Time-vs-Mental-Wellness-Prediction/
