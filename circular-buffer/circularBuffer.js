module.exports = {
    circularBuffer: circularBuffer,
    bufferEmptyException: bufferEmptyException,
    bufferFullException: bufferFullException
  }
  
  function bufferEmptyException() {
    var err = Object.create(Error.prototype);
    err.name = 'BufferEmptyException';
  
    return err;
  }
  
  function bufferFullException() {
    var err = Object.create(Error.prototype);
    err.name = 'BufferFullException';
  
    return err;
  }
  
  // We could create a simple fifo with shift() & push() but that seems like
  // cheating...
  function circularBuffer(size) {
    var buffer = new Array(size),
        head = 0,
        point = 0;
  
    function isEmpty() {
        return buffer.every(function(n) {
            return (!n);
        })
    }
  
    function isFull() {
        return (buffer[point]) ? true : false;
    } 
  
    function updatePoint(n) {
        point = (n) ? n : ++point % size;
    }
  
    function updateHead(n) {
        head = (n) ? n : ++head % size;
    }
  
    return {
        read: function() {
            if (isEmpty())
                throw new bufferEmptyException();
  
            var pop = buffer[head];
            buffer[head] = null;
            updateHead();
  
            return pop;
        },
        write: function(data) {
            if (isFull())
                throw new bufferFullException();
  
            if (data) {
                buffer[point] = data;
                updatePoint();
            }
        },
        forceWrite: function(data) {
            buffer[point] = data;
            updatePoint();
            updateHead();
        },
        clear: function() {
            buffer.forEach(function(n, i, a) {
                a[i] = null;
            })
  
            updatePoint(0);
            updateHead(0);
        }
    }
  }
  