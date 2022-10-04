function editPages(pageNr, position, pages) {
  // pages.forEach((element) => {
  //   try {
  //     let topLeft;
  //     let bottomLeft;
  //     let topRight;
  //     let bottomRight;

  //     const elements =
  //       element.element.children[0].children[4].children[8].children[0]
  //         .children[0].children;
  //     let firstElement = elements[0];
  //     if (firstElement.tagName == "H1") firstElement = elements[1];
  //     topLeft = firstElement;
  //     bottomRight = elements[elements.length - 1];
  //     // loop through elements
  //     for (let i = 0; i < elements.length; i++) {
  //       const element = elements[i];
  //       if (i > 0) {
  //         const previousElement = elements[i - 1];
  //         // get y position of element with respect to the page
  //         const y = element.offsetTop;
  //         const previousY = previousElement.offsetTop;
  //         if (y < previousY) {
  //           // current is higher so new column started
  //           bottomLeft = previousElement;
  //           topRight = element;
  //         }
  //       }
  //     }
  //     // log the elements
  //     console.log(topLeft ? topLeft : "none");
  //     console.log(bottomLeft ? bottomLeft : "none");
  //     console.log(topRight ? topRight : "none");
  //     console.log(bottomRight ? bottomRight : "none");
  //     console.log("\n-----\n");

  //     if (bottomLeft.tagName == "H2") {
  //       // break before css
  //       bottomLeft.style.breakBefore = "column";
  //     }
  //     if (topRight.tagName == "H2") {
  //       // break after css
  //       topRight.style.breakBefore = "column";
  //     }
  //     // // change margin of elements
  //     topLeft.style.marginTop = "0px";
  //     topRight.style.marginTop = "0px";
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  const page = pages[pageNr];
  const elements =
    page.element.children[0].children[4].children[8].children[0].children[0]
      .children;
  switch (position) {
    case 0: {
      // top left
      const element = elements[0];
      console.log(element);
      if (element.tagName != "H1") {
        // get id of element
        //const id = element.getAttribute("id");
        // change local html file
        // localStorage.setItem("elementId", element.id);
        position++;
      }
    }
    case 1: {
      // bottom left
    }
    case 2: {
      // top right
    }
    case 3: {
      // bottom right
    }
    case 4: {
      // top left
    }
  }
}
