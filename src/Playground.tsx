import React, { useState } from "react";

import { Stepper, Input, Group, Button, Text, Stack } from "@mantine/core";
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';


const Playground = () => {

    const [values, setValues] = useState({
        step1Value: '',
        step2Value: '',
        step3Value: '',
    });

    const [active, setActive] = useState(0);

    const updateValues = (step: number, value: string) => {
        setValues((prev) => ({ 
            ...prev, 
            [`step${step}Value`]: value, 
        }));
    };

    const id = useId();

    
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
<>
        <Stack
            spacing="xl"
            style={{
                
            }}
        >
            
        

        <Stepper
            style={{
                flex: 1,
            }}
        active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="First step" description="Enter Your PhoneNumber">

            <Input.Wrapper id={id} label="Your phone" required maw={320} mx="auto">
                
                <Input
                    type="text"
                    placeholder="Your phone"
                    value={values.step1Value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>
                        ) => updateValues(1, e.target.value)}

                    component={IMaskInput}
                    mask="+254 (000) 000-000"
                />
            </Input.Wrapper>

            </Stepper.Step>

            <Stepper.Step label="Second step" description="Enter Your email">

                <Input.Wrapper id={id} label="Your email" required maw={320} mx="auto">
                        
                        <Input
                        type="text"
                        placeholder="Your Email"
                        value={values.step2Value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>
                            ) => updateValues(2, e.target.value)}
                        />
                </Input.Wrapper>
                
            </Stepper.Step>

            <Stepper.Step label="Final step" description="Verify Your info">

                    <Group>
                        <strong>Step 1:</strong> {values.step1Value}
                    </Group>

                    <Group>
                        <strong>Step 2:</strong> {values.step2Value}
                    </Group>
            </Stepper.Step>

            <Stepper.Completed>
            <Text fz="sm">Verified Successfully. Check your Email for more info.</Text>
            </Stepper.Completed>

        </Stepper>


        <Group 
        position="center" mt="xl">
            <Button 
            variant="default" 
            onClick={prevStep}
            disabled={active === 0}
            >
                Back
            </Button>

            <Button 
            onClick={nextStep}
            disabled={active === 3}
            >
                Next step
            </Button>
        </Group>

        </Stack>
</>
  )
}

export default Playground;