/**
 * @param {number[]} height
 * @return {number}
 */

class IndentData{
    constructor(indexedLocation,height) {
        this.indexedLocation = indexedLocation
        this.height = height
    }
}

 var trap = function(height) {

    let indentAreaTotal = 0; //Will be returned (A.K.A Maximum Water Trapped)
    let indentMap = new Map()

    let lastMaximum = -1; //Zero works here too but I prefer -1
    let lastEvaluatedIndentIndex = 0;
    let prev;
    for (let i = 0; i<height.length; i++) {
        //loop initialization assignments
        let currentHeight = height[i]
    
        if (lastMaximum < height[i]) {
            lastMaximum = new IndentData(i, currentHeight);
            indentMap.set(i, currentHeight);
            lastEvaluatedIndentIndex = i;
            prev = currentHeight;
            continue;
        }

        if (height[i] < lastMaximum.height) {

        }

        if (height[i] >= lastMaximum.height) {
            // The real calculations of Area happens here!
            let geometricOffsetWidth = 1; //This is the resolution of the height map! Think of this a the spacial width of each segmant.
            for (let y = 1; y <= lastMaximum.height; y++) {
                
                let isAir;
                (height[i-1] < y) ? isAir=true : isAir=false;

                let areaArray = [];
                let lastSegmentationIndex = i
                for(let x=i; x >= lastEvaluatedIndentIndex; x--) {

                }
            }

            // Terminus Cleanup


        }



    }
};