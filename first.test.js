function testGender(gender){
    if(gender == "M"){
        return("Ваш пол мужской")
    }
    else if(gender == "F"){
        return("Ваш пол женский")
    }
    else{
        return("Ваш пол не определён")
    }
}

test('Gender_test', ()=>{
    expect(testGender("M")).toBe("Ваш пол мужской");

    expect(testGender("F")).toBe("Ваш пол женский");

    expect(testGender("Q")).toBe("Ваш пол не определён");
    expect(testGender("B")).toBe("Ваш пол не определён");
})