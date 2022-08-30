driver.get("https://zh.surveymonkey.com/r/EmployeeHealthCheck")

agree = driver.find_element_by_id("87960815_688357155_label") 
agree.click()

employeeID = driver.find_element_by_id("87960813")
employeeID.send_keys("126486")

                # measureMethod = driver.find_element_by_id("66405069_542650092_label")
                # measureMethod.click()

                # temper = driver.find_element_by_id("66405065")
                # import random

                # tp = round(random.uniform(35,36),1)
                # temper.send_keys(str(round(tp,1)))
                # print("tp:",str(round(tp,1)))

                # Symptoms 
                from selenium.webdriver.common.by import By
                driver.find_element(By.XPATH, '//*[@id="87960820_688357202_label"]/span[2]').click()

                # No = driver.find_element_by_id("763128024_5051449895_label")
                # No.click()
                # ever gone 
                #driver.find_element(By.XPATH, '//*[@id="66405078_542650164_label"]/span[2]').click()
                # Not yet to test ...
                # driver.find_element(By.XPATH,'//*[@id="question-field-66405129"]/div/div/div/div[1]/div/div[2]/label/span').click()
                # input('click choose date')
                # #driver.find_element(By.CLASS_NAME, "today day")
                # lst = driver.find_elements_by_class_name("today day")
                # print('lst',len(lst))
                # input('choose today')
                driver.find_element(By.XPATH,'//*[@id="87960821_688357186_label"]/span[2]').click()
                
                # negative 
                testDt = driver.find_element_by_id("87960822_688357192_DMY")
                # mm/dd/yyyy
                from datetime import datetime
                print(datetime.today().strftime('%m/%d/%Y'))

                testDt.send_keys(datetime.today().strftime('%m/%d/%Y'))
                print('send_keys way')
                #input('Not yet to test ...')
                # require: no symptoms 
                # driver.find_element(By.XPATH,'//*[@id="66405074_542650161_label"]/span[2]').click()
                #input('ever contact?')
                #input('no symptoms')
                # //*[@id="763128024_5051449895_label"]/span[2]
                # driver.find_element(By.XPATH, '//*[@id="763128024_5051449895_label"]/span[2]').click()
                # catego = driver.find_element_by_id("763128024_5051449895_label")
                # catego.click()

                # finishOneShoot = driver.find_element_by_id("66405076_542650156_label")
                # finishOneShoot.click()

                # taoyuan = driver.find_element_by_id("748706328_4926038299_label")
                # taoyuan.click()
                Yes = driver.find_element_by_id("87960814_688357154_label")
                Yes.click()
                #input("Check it out!")

                nextPage = driver.find_element_by_xpath('//*[@id="patas"]/main/article/section/form/div[2]/button')
                nextPage.click()
                #input('nextPage...debug')
                print("current Url:"+driver.current_url)
                if driver.current_url == 'https://zh.surveymonkey.com/r/HCCompleted':
                    print('Completed')
                else:
                    raise Exception('check the tpReturn form')    
                #input("wait for check...")
                # no click ... END ?
                # wait ... 
                driver.find_element_by_xpath('//*[@id="patas"]/main/article/section/form/div[2]/button').click()
                #input('close windows...') 
                #input("close Window")
                #input("Check it out!")
                # print("OK!")
                driver.quit()