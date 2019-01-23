import React from "react";
import {shallow} from "enzyme";
import Dashboard from "./Dashboard";


describe("DashContainer test", () => {
  
  describe("initialPropsToState", () => {
    const props = {
      data: [],
      isFetching: true,
      error: ""
    }
        
      const DC = shallow(<Dashboard {...props} />);
     
    it("first render", () => {
      expect(DC.find('p').text()).toEqual("Завантаження...")
    });

    
  });
  describe("Error", () => {
    const props = {
      data: [],
      isFetching: false,
      error: "error"
    }
        
      const DC = shallow(<Dashboard {...props} />);
     
      it("error render", () => {
        expect(DC.find('p').text()).toEqual("Під час завантаження виникла помилка!")
      });

    })
    describe("POst render", () => {
      const props = {
        data: [{id: 1, name: 'gggg', title: 'jjjj', receivedAt: 23}],
        isFetching: false,
        error: ""
      }
          
        const DC = shallow(<Dashboard {...props} />);
       
        it("error render", () => {
          expect(DC.find('Post')).toHaveLength(1)
        });
  
      })
});
