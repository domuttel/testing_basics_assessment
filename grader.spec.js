var letterGrader = require('./grader').letterGrader;
  describe('letterGrader()', function() {
    it('tests if score equals its equivalent letter grade', function() {
      expect(letterGrader(95)).toEqual('A');
      expect(letterGrader(80)).toEqual('B');
      expect(letterGrader(70)).toEqual('C');
      expect(letterGrader(50)).toEqual('F');
    });
  });

var averageScore = require('./grader').averageScore;
  describe('averageScore()', function(){
    it('tests what the average is of a given array', function(){
      expect(averageScore([1,2,3,5,7,8,9,34])).toEqual(8);
      expect(averageScore([100, 225, 345, 1])).toEqual(167);
    });
  });

var medianScore = require('./grader').medianScore;
  describe('medianScore()', function(){
    it('finds the median in a given array && if array has two medians the average of the two', function(){
      expect(medianScore([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29])).toEqual(23);
      expect(medianScore([3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56])).toEqual(22);
    });
  });

var modeScore = require('./grader').modeScore;
    describe('modeScore()', function(){
    it('finds the most occuring element in a given array', function(){
      expect(modeScore([1, 1, 1, 2, 1, 2, 4, 5, 6, 7, 2, 1])).toEqual(1);
      expect(modeScore([3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56])).toEqual(23);
      expect(modeScore([3, 3, 3, 90, 4, 2, 6, 90, 90, 2, 1, 0])).toEqual([3, 90]);
    });
  });



